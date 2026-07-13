// Content Engine - loads content from Firestore and populates the page
window.appContent = {};

function getNested(obj, path) {
    if (!obj || !path) return null;
    return path.split('.').reduce((acc, part) => {
        if (acc == null) return null;
        const m = part.match(/^(\w+)\[(\d+)\]$/);
        if (m) return (acc[m[1]] && Array.isArray(acc[m[1]])) ? acc[m[1]][parseInt(m[2])] : null;
        if (part.includes('[')) {
            const parts = part.split('[');
            const idx = parseInt(parts[1]);
            return acc[parts[0]] ? acc[parts[0]][idx] : null;
        }
        return acc[part];
    }, obj);
}

function cld(url, w, h) {
    if (!url || !url.includes('cloudinary.com')) return url;
    const parts = url.split('/upload/');
    if (parts.length !== 2) return url;
    const transforms = ['f_auto', 'q_auto'];
    if (w) transforms.push('w_' + w);
    if (h) transforms.push('h_' + h);
    return parts[0] + '/upload/' + transforms.join(',') + '/' + parts[1];
}

function populateSimple() {
    document.querySelectorAll('[data-content]').forEach(el => {
        const path = el.getAttribute('data-content');
        const val = getNested(window.appContent, path);
        if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-content-src]').forEach(el => {
        const path = el.getAttribute('data-content-src');
        const w = el.getAttribute('data-cld-w');
        const h = el.getAttribute('data-cld-h');
        const val = getNested(window.appContent, path);
        if (val && typeof val === 'string' && val.trim() !== '') {
            const optimizedUrl = cld(val, w, h);
            const preloader = new Image();
            preloader.onload = function() {
                el.src = optimizedUrl;
            };
            preloader.src = optimizedUrl;
        }
    });
}

function populateList(containerId, path, renderFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const items = getNested(window.appContent, path);
    if (items && Array.isArray(items) && items.length) {
        container.innerHTML = items.map(renderFn).join('');
    }
}

function populateLists() {
    populateList('core-principles-list', 'about.corePrinciples',
        item => `<li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary rounded-full"></span> ${item}</li>`);

    populateList('primary-domains-list', 'about.primaryDomains',
        item => `<li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary rounded-full"></span> ${item}</li>`);

    populateList('key-skills-list', 'career.keySkills',
        item => {
            if (typeof item === 'object' && item !== null) {
                const logoHtml = item.logo ? `<img src="${item.logo}" alt="" class="w-4 h-4 rounded mr-1.5 inline-block align-middle" onerror="this.remove()">` : '';
                return `<span class="inline-flex items-center px-3 py-1.5 bg-surface-container-high rounded-full text-xs font-label-md">${logoHtml}${item.name || ''}</span>`;
            }
            return `<span class="inline-flex items-center px-3 py-1.5 bg-surface-container-high rounded-full text-xs font-label-md">${item}</span>`;
        });

    populateList('soft-skills-list', 'career.softSkills',
        item => {
            if (typeof item === 'object' && item !== null) {
                const logoHtml = item.logo ? `<img src="${item.logo}" alt="" class="w-4 h-4 rounded mr-1.5 inline-block align-middle" onerror="this.remove()">` : '';
                return `<span class="inline-flex items-center px-3 py-1.5 bg-surface-container-high rounded-full text-xs font-label-md">${logoHtml}${item.name || ''}</span>`;
            }
            return `<span class="inline-flex items-center px-3 py-1.5 bg-surface-container-high rounded-full text-xs font-label-md">${item}</span>`;
        });

    populateList('career-tasks-list-1', 'career.mainExperience.tasks',
        (item) => `<li class="flex gap-4"><span class="material-symbols-outlined text-primary/40">check_circle</span><span class="font-body-md text-on-surface">${item}</span></li>`);
}

function populateSocialLinks() {
    document.querySelectorAll('[data-content-links]').forEach(container => {
        let links = window.appContent.links;
        if (!links) { container.innerHTML = ''; return; }
        if (!Array.isArray(links)) {
            links = Object.entries(links).map(([name, url]) => ({ name, url, logo: '' }));
        }
        if (!links.length) { container.innerHTML = ''; return; }
        container.innerHTML = links.map(link => {
            const href = link.url && link.url !== '#' ? `href="${link.url}"` : '';
            const logoHtml = link.logo
                ? `<img src="${link.logo}" alt="${link.name}" class="w-6 h-6 object-contain" onerror="this.remove()">`
                : '';
            return `<a ${href} class="social-link-item inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">${logoHtml}<span>${link.name || ''}</span></a>`;
        }).join('');
    });
}

function fireEvent() {
    document.dispatchEvent(new CustomEvent('contentLoaded', { detail: window.appContent }));
}

function populateEducationEntries() {
    var container = document.getElementById('education-entries-list');
    if (!container) return;
    var items = getNested(window.appContent, 'careerPage.career1.education');
    if (!items || !Array.isArray(items) || !items.length) {
        container.innerHTML = '';
        return;
    }
    container.innerHTML = items.map(function(item, i) {
        var dotClass = i === 0 ? 'bg-primary' : 'bg-outline-variant group-hover:bg-primary transition-colors duration-300';
        var mbClass = i < items.length - 1 ? 'mb-16' : '';
        var logoHtml = item.logo
            ? '<img src="' + item.logo + '" alt="' + (item.institution || '') + '" class="w-8 h-8 object-contain rounded-full flex-shrink-0 border border-outline-variant" onerror="this.style.display=\'none\'">'
            : '';
        var imgHtml = item.image
            ? '<div class="w-24 h-24 flex-shrink-0 bg-surface-container rounded-lg overflow-hidden border border-outline-variant"><img class="w-full h-full object-cover" src="' + item.image + '" onload="this.style.opacity=1" style="opacity:0;transition:opacity 0.5s;"></div>'
            : '';
        return '<div class="' + mbClass + ' relative group">'
            + '<div class="absolute -left-[36px] top-1 w-4 h-4 ' + dotClass + ' border-4 border-surface rounded-full z-10"></div>'
            + '<div class="flex flex-col md:flex-row md:items-start gap-4">'
            + '<div class="flex-grow">'
            + '<div class="flex items-center gap-3">'
            + logoHtml
            + '<div>'
            + '<span class="font-label-md text-label-md text-secondary">' + (item.period || '') + '</span>'
            + '<h3 class="font-headline-md text-headline-md text-primary mt-1">' + (item.title || '') + '</h3>'
            + '<p class="font-body-lg text-body-lg text-primary font-semibold">' + (item.institution || '') + '</p>'
            + '</div>'
            + '</div>'
            + (item.description ? '<p class="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">' + item.description + '</p>' : '')
            + '</div>'
            + imgHtml
            + '</div>'
            + '</div>';
    }).join('');
}

function populateEverything() {
    populateSimple();
    populateLists();
    populateSocialLinks();
    populateEducationEntries();
    fireEvent();
}

function migrateLinks(data) {
    if (data && data.links && !Array.isArray(data.links)) {
        data.links = Object.entries(data.links).map(([name, url]) => ({ name, url, logo: '' }));
    }
    return data;
}

function saveCache(data) {
    try { localStorage.setItem('panna_portfolio_cache', JSON.stringify(data)); } catch (e) {}
}

function loadCache() {
    try {
        const d = localStorage.getItem('panna_portfolio_cache');
        return d ? migrateLinks(JSON.parse(d)) : null;
    } catch (e) { return null; }
}

function setupListener() {
    db.collection('portfolio').doc('content')
        .onSnapshot((doc) => {
            if (doc.exists) {
                const data = migrateLinks(doc.data());
                window.appContent = data;
                saveCache(data);
            }
            populateEverything();
            document.body.classList.add('content-loaded');
        }, (error) => {
            console.error('Firestore error:', error);
            populateEverything();
            document.body.classList.add('content-loaded');
        });
}

function loadContent() {
    const cached = loadCache();
    if (cached) {
        window.appContent = cached;
        populateEverything();
    }
    let attempts = 0;
    const iv = setInterval(function() {
        attempts++;
        if (window.firebase && db) {
            clearInterval(iv);
            setupListener();
        } else if (attempts >= 60) {
            clearInterval(iv);
            if (!cached) populateEverything();
            document.body.classList.add('content-loaded');
        }
    }, 50);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadContent);
} else {
    loadContent();
}
