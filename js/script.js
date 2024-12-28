// The Configuration and images array stays in data.js

// Tag handling functions
function getTagsWithCounts() {
    const tagCounts = {};

    // Sort images by date in descending order (newest first)
    const sortedImages = images.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Count tags for sorted images
    sortedImages.forEach(img => {
        img.tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });

    // Return tags sorted by count (from highest to lowest)
    return Object.entries(tagCounts)
        .map(([tag, count]) => ({ name: tag, count }))
        .sort((a, b) => b.count - a.count);
}


// Create tag filters with counts and show more
function createTagFilters() {
    const tagFilters = document.getElementById('tagFilters');
    const allTags = getTagsWithCounts();
    
    tagFilters.innerHTML = '';
    
    allTags.forEach((tag, index) => {
        const tagElem = document.createElement('span');
        tagElem.className = `tag ${index >= INITIAL_TAGS_TO_SHOW ? 'hidden' : ''}`;
        tagElem.innerHTML = `${tag.name} <span class="tag-count">(${tag.count})</span>`;
        tagElem.onclick = () => filterByTag(tag.name);
        tagFilters.appendChild(tagElem);
    });
    
    if (allTags.length > INITIAL_TAGS_TO_SHOW) {
        const showMoreBtn = document.createElement('button');
        showMoreBtn.className = 'show-more-btn';
        showMoreBtn.textContent = 'Show More';
        showMoreBtn.onclick = toggleTags;
        tagFilters.appendChild(showMoreBtn);
    }
}

function toggleTags() {
    const btn = document.querySelector('.show-more-btn');
    const hiddenTags = document.querySelectorAll('.tag.hidden');
    const isExpanded = btn.textContent === 'Show Less';
    
    hiddenTags.forEach(tag => {
        tag.style.display = isExpanded ? 'none' : 'inline-block';
    });
    
    btn.textContent = isExpanded ? 'Show More' : 'Show Less';
}

// Modified display images function with pagination
function displayImages(imagesToShow, append = false) {
    const grid = document.getElementById('imageGrid');
    if (!append) {
        grid.innerHTML = '';
    }
    
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = currentPage * ITEMS_PER_PAGE;
    const paginatedImages = imagesToShow.slice(start, end);
    
    paginatedImages.forEach(img => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.onclick = () => openModal(img);
        
        card.innerHTML = `<img src="${img.url}" alt="${img.title}">`;
        grid.appendChild(card);
    });

    updateLoadMoreIndicator(imagesToShow.length > end);
}

// Filter images by tag
function filterByTag(tag) {
    currentPage = 1; // Reset to first page when filtering
    const tagElement = Array.from(document.getElementsByClassName('tag'))
        .find(el => el.textContent.includes(tag));
        
    tagElement.classList.toggle('active');
    
    const activeTags = Array.from(document.getElementsByClassName('tag active'))
        .map(el => el.textContent.split(' (')[0]);
        
    const filteredImages = activeTags.length === 0 
        ? images 
        : images.filter(img => 
            activeTags.some(tag => img.tags.includes(tag))
          );
          
    displayImages(filteredImages);
}

// Infinite scroll handling
function handleScroll() {
    if (isLoading) return;

    const endOfPage = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000;

    if (endOfPage) {
        loadMoreImages();
    }
}

function loadMoreImages() {
    isLoading = true;
    
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'block';

    setTimeout(() => {
        currentPage++;
        
        const activeTags = Array.from(document.getElementsByClassName('tag active'))
            .map(el => el.textContent.split(' (')[0]);
            
        const filteredImages = activeTags.length === 0 
            ? images 
            : images.filter(img => 
                activeTags.some(tag => img.tags.includes(tag))
              );
        
        displayImages(filteredImages, true);
        isLoading = false;
        
        if (loader) loader.style.display = 'none';
    }, 500);
}

function updateLoadMoreIndicator(hasMore) {
    const existingLoader = document.querySelector('.loader');
    if (!hasMore && existingLoader) {
        existingLoader.remove();
        return;
    }
    
    if (hasMore && !existingLoader) {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.innerHTML = '<div class="loader-content">Loading for you...</div>';
        document.getElementById('imageGrid').insertAdjacentElement('afterend', loader);
    }
}

// Your existing modal functions stay the same
function openModal(image) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalTags = document.getElementById('modalTags');

    modalImage.src = image.url;
    
    // Check if image has href to make title clickable
    if (image.href) {
        modalTitle.innerHTML = `<a href="${image.href}" target="_blank">${image.title}</a>`;
    } else {
        modalTitle.textContent = image.title;
    }

    modalDate.textContent = new Date(image.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    modalTags.innerHTML = image.tags
        .map(tag => `<span class="modal-tag">${tag}</span>`)
        .join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize everything
function init() {
    createTagFilters();
    displayImages(images);
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') {
            closeModal();
        }
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', 
            currentTheme === 'dark' ? 'light' : 'dark'
        );
    });
}

// Start the app
init();