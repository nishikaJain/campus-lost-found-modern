// API Configuration
const API_URL = 'http://localhost:3000/api';

let allItems = [];
let lostItems = [];
let foundItems = [];

// Page Navigation
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected page
    const pageMap = {
        'home': 'home-page',
        'lost-items': 'lost-items-page',
        'found-items': 'found-items-page',
        'report-lost': 'report-lost-page',
        'report-found': 'report-found-page'
    };

    document.getElementById(pageMap[pageName]).classList.add('active');

    // Add active class to corresponding nav item
    const navItem = document.querySelector(`[onclick="showPage('${pageName}')"]`);
    if (navItem) {
        navItem.classList.add('active');
    }

    // Load data for specific pages
    if (pageName === 'home') {
        loadHomeData();
    } else if (pageName === 'lost-items') {
        loadLostItems();
    } else if (pageName === 'found-items') {
        loadFoundItems();
    }
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type} show`;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Load Home Data
async function loadHomeData() {
    try {
        const response = await fetch(`${API_URL}/items`);
        const result = await response.json();

        if (result.success) {
            allItems = result.data;
            updateStatistics();
            displayRecentItems();
        }
    } catch (error) {
        console.error('Error loading home data:', error);
    }
}

// Update Statistics
function updateStatistics() {
    const activeLost = allItems.filter(item => item.status === 'lost' && !item.is_claimed).length;
    const itemsFound = allItems.filter(item => item.status === 'found' && !item.is_claimed).length;
    const totalItems = allItems.length;
    const claimedItems = allItems.filter(item => item.is_claimed).length;
    const successRate = totalItems > 0 ? Math.round((claimedItems / totalItems) * 100) : 0;

    document.getElementById('active-lost-count').textContent = activeLost;
    document.getElementById('items-found-count').textContent = itemsFound;
    document.getElementById('success-rate').textContent = successRate + '%';
}

// Display Recent Items
function displayRecentItems() {
    const recentLost = allItems
        .filter(item => item.status === 'lost' && !item.is_claimed)
        .slice(0, 2);

    const recentFound = allItems
        .filter(item => item.status === 'found' && !item.is_claimed)
        .slice(0, 2);

    document.getElementById('recent-lost-items').innerHTML = recentLost.map(item => createItemCard(item, 'lost')).join('');
    document.getElementById('recent-found-items').innerHTML = recentFound.map(item => createItemCard(item, 'found')).join('');
}

// Create Item Card
function createItemCard(item, type) {
    const buttonText = type === 'lost' ? 'Contact Owner' : 'Contact Finder';
    const buttonIcon = type === 'lost' ? 'fa-envelope' : 'fa-envelope';

    return `
        <div class="item-card">
            <div class="item-card-header">
                <div>
                    <h3 class="item-title">${item.item_name}</h3>
                    <span class="category-badge category-${item.category}">${item.category}</span>
                </div>
            </div>
            <p class="item-description">${item.description || 'No description provided'}</p>
            <div class="item-meta">
                <div class="item-meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${item.location}</span>
                </div>
                <div class="item-meta-item">
                    <i class="fas fa-calendar"></i>
                    <span>${new Date(item.date_reported).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
            </div>
            <button class="contact-btn" onclick="showContactModal(${item.id}, '${type}')">
                <i class="fas ${buttonIcon}"></i>
                ${buttonText}
            </button>
        </div>
    `;
}

// Load Lost Items
async function loadLostItems() {
    try {
        const response = await fetch(`${API_URL}/items/lost`);
        const result = await response.json();

        if (result.success) {
            lostItems = result.data.filter(item => !item.is_claimed);
            displayLostItems(lostItems);
        }
    } catch (error) {
        console.error('Error loading lost items:', error);
        document.getElementById('lost-items-container').innerHTML = 
            '<p style="text-align: center; color: #999; padding: 3rem;">Unable to load items. Please check your connection.</p>';
    }
}

// Display Lost Items
function displayLostItems(items) {
    const container = document.getElementById('lost-items-container');
    document.getElementById('lost-items-count').textContent = `Showing ${items.length} lost items`;

    if (items.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 3rem;">No lost items found.</p>';
        return;
    }

    container.innerHTML = items.map(item => createItemCard(item, 'lost')).join('');
}

// Search Lost Items
function searchLostItems() {
    const query = document.getElementById('lost-search').value.toLowerCase();
    const category = document.getElementById('lost-category-filter').value;

    let filtered = lostItems.filter(item => {
        const matchesSearch = item.item_name.toLowerCase().includes(query) ||
                            (item.description && item.description.toLowerCase().includes(query)) ||
                            item.location.toLowerCase().includes(query);
        const matchesCategory = !category || item.category === category;
        return matchesSearch && matchesCategory;
    });

    displayLostItems(filtered);
}

// Filter Lost Items
function filterLostItems() {
    searchLostItems();
}

// Load Found Items
async function loadFoundItems() {
    try {
        const response = await fetch(`${API_URL}/items/found`);
        const result = await response.json();

        if (result.success) {
            foundItems = result.data.filter(item => !item.is_claimed);
            displayFoundItems(foundItems);
        }
    } catch (error) {
        console.error('Error loading found items:', error);
        document.getElementById('found-items-container').innerHTML = 
            '<p style="text-align: center; color: #999; padding: 3rem;">Unable to load items. Please check your connection.</p>';
    }
}

// Display Found Items
function displayFoundItems(items) {
    const container = document.getElementById('found-items-container');
    document.getElementById('found-items-count').textContent = `Showing ${items.length} found items`;

    if (items.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 3rem;">No found items available.</p>';
        return;
    }

    container.innerHTML = items.map(item => createItemCard(item, 'found')).join('');
}

// Search Found Items
function searchFoundItems() {
    const query = document.getElementById('found-search').value.toLowerCase();
    const category = document.getElementById('found-category-filter').value;

    let filtered = foundItems.filter(item => {
        const matchesSearch = item.item_name.toLowerCase().includes(query) ||
                            (item.description && item.description.toLowerCase().includes(query)) ||
                            item.location.toLowerCase().includes(query);
        const matchesCategory = !category || item.category === category;
        return matchesSearch && matchesCategory;
    });

    displayFoundItems(filtered);
}

// Filter Found Items
function filterFoundItems() {
    searchFoundItems();
}

// Show Contact Modal
async function showContactModal(itemId, type) {
    try {
        const response = await fetch(`${API_URL}/item/${itemId}`);
        const result = await response.json();

        if (result.success) {
            const item = result.data;
            const modal = document.getElementById('contact-modal');
            const title = type === 'lost' ? 'Contact Owner' : 'Contact Finder';

            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-body').innerHTML = `
                <div style="line-height: 2;">
                    <p><strong>Name:</strong> ${item.contact_name}</p>
                    ${item.contact_email ? `<p><strong>Email:</strong> <a href="mailto:${item.contact_email}" style="color: var(--primary-blue);">${item.contact_email}</a></p>` : ''}
                    ${item.contact_phone ? `<p><strong>Phone:</strong> <a href="tel:${item.contact_phone}" style="color: var(--primary-blue);">${item.contact_phone}</a></p>` : ''}
                    <p style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--gray-200); color: var(--gray-600); font-size: 0.875rem;">
                        <strong>Item:</strong> ${item.item_name}<br>
                        <strong>Location:</strong> ${item.location}
                    </p>
                </div>
            `;

            modal.classList.add('show');
        }
    } catch (error) {
        console.error('Error loading contact info:', error);
        showNotification('Unable to load contact information', 'error');
    }
}

// Close Contact Modal
function closeContactModal() {
    document.getElementById('contact-modal').classList.remove('show');
}

// Report Lost Form
document.getElementById('report-lost-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.status = 'lost';

    try {
        const response = await fetch(`${API_URL}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            showNotification('✅ Lost item reported successfully!', 'success');
            e.target.reset();

            setTimeout(() => {
                showPage('lost-items');
            }, 1500);
        } else {
            showNotification('❌ Error: ' + result.error, 'error');
        }
    } catch (error) {
        showNotification('❌ Failed to submit. Please check your connection!', 'error');
        console.error('Error:', error);
    }
});

// Report Found Form
document.getElementById('report-found-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.status = 'found';

    try {
        const response = await fetch(`${API_URL}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            showNotification('✅ Found item reported successfully!', 'success');
            e.target.reset();

            setTimeout(() => {
                showPage('found-items');
            }, 1500);
        } else {
            showNotification('❌ Error: ' + result.error, 'error');
        }
    } catch (error) {
        showNotification('❌ Failed to submit. Please check your connection!', 'error');
        console.error('Error:', error);
    }
});

// Close modal when clicking outside
document.getElementById('contact-modal').addEventListener('click', (e) => {
    if (e.target.id === 'contact-modal') {
        closeContactModal();
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    loadHomeData();
});
