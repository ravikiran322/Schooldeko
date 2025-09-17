// School Deko JavaScript

// School data
const schoolsData = {
  "schools": [
    {
      "id": 1,
      "name": "Delhi Public School",
      "location": "Sector 45, Gurgaon",
      "type": "Day School",
      "board": "CBSE",
      "image": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
      "about": "DPS Gurgaon is one of the premier educational institutions in the National Capital Region, known for its academic excellence and holistic development approach.",
      "facilities": ["Library", "Sports Complex", "Science Labs", "Computer Lab", "Art Studio", "Cafeteria"],
      "fees": "₹2,50,000 - ₹3,00,000 per annum",
      "established": "1998",
      "contact": {
        "phone": "+91-9876543210",
        "email": "info@dpsgurgaon.edu.in",
        "website": "www.dpsgurgaon.edu.in"
      },
      "alumni": {
        "notable": [
          {
            "name": "Rajesh Sharma",
            "batch": "2005",
            "achievement": "CEO of Tech Innovations Pvt Ltd",
            "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          },
          {
            "name": "Priya Patel",
            "batch": "2008",
            "achievement": "IAS Officer, District Collector",
            "image": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          }
        ],
        "testimonials": [
          {
            "text": "DPS gave me the foundation I needed to succeed in life. The teachers were inspiring and supportive.",
            "author": "Amit Kumar, Class of 2010"
          }
        ],
        "achievements": [
          "100+ students in top engineering colleges",
          "50+ civil services officers",
          "Multiple startup founders"
        ]
      }
    },
    {
      "id": 2,
      "name": "The Doon School",
      "location": "Dehradun, Uttarakhand",
      "type": "Boarding School",
      "board": "CBSE/IB",
      "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      "about": "The Doon School is one of India's most prestigious all-boys boarding schools, known for producing leaders in various fields.",
      "facilities": ["Boarding Houses", "Sports Fields", "Observatory", "Theater", "Music Room", "Dining Hall"],
      "fees": "₹8,00,000 - ₹10,00,000 per annum",
      "established": "1935",
      "contact": {
        "phone": "+91-9123456789",
        "email": "admissions@doonschool.com",
        "website": "www.doonschool.com"
      },
      "alumni": {
        "notable": [
          {
            "name": "Vikram Singh",
            "batch": "1995",
            "achievement": "Supreme Court Judge",
            "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          },
          {
            "name": "Arjun Malhotra",
            "batch": "2000",
            "achievement": "Bollywood Director",
            "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
          }
        ],
        "testimonials": [
          {
            "text": "Doon taught me discipline, leadership, and the value of friendship that lasts a lifetime.",
            "author": "Rohit Verma, Class of 2012"
          }
        ],
        "achievements": [
          "Prime Ministers and Ministers",
          "Supreme Court Judges",
          "Industry Leaders and Entrepreneurs"
        ]
      }
    },
    {
      "id": 3,
      "name": "Bangalore International School",
      "location": "Whitefield, Bangalore",
      "type": "Day School",
      "board": "IB",
      "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop",
      "about": "A leading international school offering world-class education with a focus on global perspectives and innovative learning.",
      "facilities": ["Modern Classrooms", "Swimming Pool", "Tennis Courts", "Innovation Lab", "Library", "Auditorium"],
      "fees": "₹4,50,000 - ₹6,00,000 per annum",
      "established": "2005",
      "contact": {
        "phone": "+91-8765432109",
        "email": "info@bischool.edu.in",
        "website": "www.bischool.edu.in"
      },
      "alumni": {
        "notable": [
          {
            "name": "Sarah Johnson",
            "batch": "2015",
            "achievement": "Oxford University Graduate",
            "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
          },
          {
            "name": "Karan Gupta",
            "batch": "2013",
            "achievement": "MIT Graduate, AI Researcher",
            "image": "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
          }
        ],
        "testimonials": [
          {
            "text": "The international curriculum prepared me for global opportunities and diverse perspectives.",
            "author": "Ananya Reddy, Class of 2018"
          }
        ],
        "achievements": [
          "Students in Ivy League universities",
          "International scholarship recipients",
          "Global leaders in technology"
        ]
      }
    },
    {
      "id": 4,
      "name": "Little Angels Play School",
      "location": "Sector 12, Noida",
      "type": "Play School",
      "board": "Montessori",
      "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
      "about": "A nurturing environment for early childhood development using Montessori methodology and child-centered learning approaches.",
      "facilities": ["Play Areas", "Sensory Room", "Art Corner", "Garden", "Music Room", "Safe Transportation"],
      "fees": "₹45,000 - ₹60,000 per annum",
      "established": "2010",
      "contact": {
        "phone": "+91-7654321098",
        "email": "info@littleangels.edu.in",
        "website": "www.littleangels.edu.in"
      },
      "alumni": {
        "notable": [
          {
            "name": "Young Achievers",
            "batch": "Various",
            "achievement": "Successfully transitioned to top primary schools",
            "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=150&h=150&fit=crop&crop=face"
          }
        ],
        "testimonials": [
          {
            "text": "My child developed confidence and social skills that became the foundation for future success.",
            "author": "Parent of Class of 2020"
          }
        ],
        "achievements": [
          "100% admission rate to desired primary schools",
          "Excellence in early childhood development",
          "Award-winning Montessori program"
        ]
      }
    },
    {
      "id": 5,
      "name": "St. Xavier's Collegiate School",
      "location": "Park Street, Kolkata",
      "type": "Day School",
      "board": "ICSE",
      "image": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      "about": "A heritage institution known for academic excellence, character formation, and producing well-rounded individuals.",
      "facilities": ["Heritage Library", "Science Labs", "Basketball Courts", "Chapel", "Debate Hall", "Computer Center"],
      "fees": "₹1,80,000 - ₹2,20,000 per annum",
      "established": "1860",
      "contact": {
        "phone": "+91-6543210987",
        "email": "office@sxccal.edu",
        "website": "www.sxccal.edu"
      },
      "alumni": {
        "notable": [
          {
            "name": "Dr. Sourav Ganguly",
            "batch": "1990",
            "achievement": "Former Indian Cricket Captain",
            "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
          },
          {
            "name": "Justice Roy",
            "batch": "1985",
            "achievement": "High Court Judge",
            "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          }
        ],
        "testimonials": [
          {
            "text": "St. Xavier's shaped my character and instilled values that guide me even today.",
            "author": "Abhishek Chatterjee, Class of 2005"
          }
        ],
        "achievements": [
          "Cricket legends and sports personalities",
          "Judges and legal luminaries",
          "Business leaders across industries"
        ]
      }
    },
    {
      "id": 6,
      "name": "Christ Junior College",
      "location": "Hosur Road, Bangalore",
      "type": "PU College",
      "board": "Karnataka State",
      "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      "about": "Premier pre-university college known for academic excellence and comprehensive development of students.",
      "facilities": ["Modern Labs", "Library", "Auditorium", "Sports Complex", "Cafeteria", "Counseling Center"],
      "fees": "₹85,000 - ₹1,20,000 per annum",
      "established": "1969",
      "contact": {
        "phone": "+91-5432109876",
        "email": "admissions@christjunior.in",
        "website": "www.christjunior.in"
      },
      "alumni": {
        "notable": [
          {
            "name": "Dr. Meera Iyer",
            "batch": "2010",
            "achievement": "Medical Research Scientist",
            "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
          },
          {
            "name": "Ravi Kumar",
            "batch": "2008",
            "achievement": "Software Engineering Manager",
            "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          }
        ],
        "testimonials": [
          {
            "text": "Christ Junior College provided the perfect bridge between school and university education.",
            "author": "Sneha Reddy, Class of 2015"
          }
        ],
        "achievements": [
          "High success rate in competitive exams",
          "Students in top engineering and medical colleges",
          "Excellence in science and commerce streams"
        ]
      }
    }
  ]
};

// Global variables
let currentFilters = {
  type: '',
  board: '',
  search: ''
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    showPage('home');
    renderSchools(schoolsData.schools);
}

function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('href').substring(1);
            showPage(targetPage);
            closeMobileMenu();
        });
    });

    // Call request buttons
    const callRequestBtns = document.querySelectorAll('.call-request-btn, .mobile-call-btn .btn');
    callRequestBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('contactModal');
        });
    });

    // Search button
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryName = card.querySelector('h3').textContent;
            filterByCategory(categoryName);
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Modal close functionality
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeModal('contactModal');
            }
        });

        const modalClose = contactModal.querySelector('.modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => closeModal('contactModal'));
        }
    }

    // Filter dropdowns
    const schoolTypeFilter = document.getElementById('schoolTypeFilter');
    if (schoolTypeFilter) {
        schoolTypeFilter.addEventListener('change', applyFilters);
    }

    const boardFilter = document.getElementById('boardFilter');
    if (boardFilter) {
        boardFilter.addEventListener('change', applyFilters);
    }

    // Window resize handler
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
        mobileNav.classList.toggle('hidden');
    }
}

function closeMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
        mobileNav.classList.add('hidden');
    }
}

function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        console.log('Page shown:', pageId);
    } else {
        console.error('Page not found:', pageId);
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

function openModal(modalId) {
    console.log('Opening modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        console.log('Modal opened:', modalId);
    } else {
        console.error('Modal not found:', modalId);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    // Show success message
    alert('Thank you for your request! We will call you back within 24 hours.');
    
    // Reset form and close modal
    e.target.reset();
    closeModal('contactModal');
}

// Search and filter functionality
function performSearch() {
    console.log('Performing search...');
    const categorySelect = document.getElementById('categorySelect');
    const locationSearch = document.getElementById('locationSearch');
    
    const category = categorySelect ? categorySelect.value : '';
    const location = locationSearch ? locationSearch.value : '';
    
    console.log('Search params:', { category, location });
    
    currentFilters.type = category;
    currentFilters.search = location;
    
    showPage('schools');
    
    // Update filter dropdowns on schools page
    setTimeout(() => {
        const schoolTypeFilter = document.getElementById('schoolTypeFilter');
        const boardFilter = document.getElementById('boardFilter');
        
        if (schoolTypeFilter) {
            schoolTypeFilter.value = category;
        }
        if (boardFilter) {
            boardFilter.value = '';
        }
        
        applyFilters();
    }, 100);
}

function filterByCategory(category) {
    console.log('Filtering by category:', category);
    currentFilters.type = category;
    currentFilters.search = '';
    
    showPage('schools');
    
    // Update filter dropdowns
    setTimeout(() => {
        const schoolTypeFilter = document.getElementById('schoolTypeFilter');
        const boardFilter = document.getElementById('boardFilter');
        
        if (schoolTypeFilter) {
            schoolTypeFilter.value = category;
        }
        if (boardFilter) {
            boardFilter.value = '';
        }
        
        applyFilters();
    }, 100);
}

function applyFilters() {
    console.log('Applying filters...');
    const schoolTypeFilter = document.getElementById('schoolTypeFilter');
    const boardFilter = document.getElementById('boardFilter');
    
    const typeFilter = schoolTypeFilter ? schoolTypeFilter.value : '';
    const boardFilterValue = boardFilter ? boardFilter.value : '';
    
    currentFilters.type = typeFilter;
    currentFilters.board = boardFilterValue;
    
    let filteredSchools = schoolsData.schools.filter(school => {
        const matchesType = !currentFilters.type || school.type === currentFilters.type;
        const matchesBoard = !currentFilters.board || school.board.includes(currentFilters.board);
        const matchesSearch = !currentFilters.search || 
            school.name.toLowerCase().includes(currentFilters.search.toLowerCase()) ||
            school.location.toLowerCase().includes(currentFilters.search.toLowerCase());
        
        return matchesType && matchesBoard && matchesSearch;
    });
    
    console.log('Filtered schools:', filteredSchools.length);
    renderSchools(filteredSchools);
}

function renderSchools(schools) {
    const schoolListings = document.getElementById('schoolListings');
    
    if (!schoolListings) {
        console.error('School listings container not found');
        return;
    }
    
    if (schools.length === 0) {
        schoolListings.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                <h3>No schools found</h3>
                <p>Try adjusting your search criteria or filters.</p>
            </div>
        `;
        return;
    }
    
    schoolListings.innerHTML = schools.map(school => `
        <div class="school-card">
            <img src="${school.image}" alt="${school.name}" class="school-image" loading="lazy">
            <div class="school-info">
                <h3 class="school-name">${school.name}</h3>
                <div class="school-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${school.location}
                </div>
                <div class="school-meta">
                    <span class="school-type">${school.type}</span>
                    <span class="school-board">${school.board}</span>
                </div>
                <p class="school-description">${school.about.substring(0, 120)}...</p>
                <button class="btn btn--primary view-details-btn" onclick="showSchoolDetail(${school.id})">
                    <i class="fas fa-eye"></i>
                    View Details
                </button>
            </div>
        </div>
    `).join('');
    
    console.log('Schools rendered:', schools.length);
}

function showSchoolDetail(schoolId) {
    console.log('Showing school detail for ID:', schoolId);
    const school = schoolsData.schools.find(s => s.id === schoolId);
    
    if (!school) {
        alert('School not found');
        return;
    }
    
    const schoolDetailContent = document.getElementById('schoolDetailContent');
    
    if (!schoolDetailContent) {
        console.error('School detail content container not found');
        return;
    }
    
    schoolDetailContent.innerHTML = `
        <div class="school-detail-header">
            <img src="${school.image}" alt="${school.name}" class="school-detail-image" loading="lazy">
            <h1 class="school-detail-title">${school.name}</h1>
            <div class="school-detail-location">
                <i class="fas fa-map-marker-alt"></i>
                ${school.location}
            </div>
            <div class="school-detail-meta">
                <span class="school-type">${school.type}</span>
                <span class="school-board">${school.board}</span>
                <span class="status status--info">Est. ${school.established}</span>
            </div>
        </div>
        
        <div class="detail-sections">
            <div class="detail-section">
                <h3><i class="fas fa-info-circle"></i> About</h3>
                <p>${school.about}</p>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-building"></i> Facilities</h3>
                <div class="facilities-list">
                    ${school.facilities.map(facility => `
                        <div class="facility-item">
                            <i class="fas fa-check"></i>
                            ${facility}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-rupee-sign"></i> Fee Structure</h3>
                <p><strong>Annual Fees:</strong> ${school.fees}</p>
            </div>
            
            <div class="detail-section alumni-section">
                <h3><i class="fas fa-users"></i> Alumni Network</h3>
                
                <h4>Notable Alumni</h4>
                <div class="notable-alumni">
                    ${school.alumni.notable.map(alumnus => `
                        <div class="alumni-card">
                            <img src="${alumnus.image}" alt="${alumnus.name}" class="alumni-photo" loading="lazy">
                            <div class="alumni-name">${alumnus.name}</div>
                            <div class="alumni-batch">Class of ${alumnus.batch}</div>
                            <div class="alumni-achievement">${alumnus.achievement}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="testimonials">
                    <h4>Alumni Testimonials</h4>
                    ${school.alumni.testimonials.map(testimonial => `
                        <div class="testimonial">
                            <div class="testimonial-text">"${testimonial.text}"</div>
                            <div class="testimonial-author">- ${testimonial.author}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="achievements-list">
                    <h4>Alumni Achievements</h4>
                    ${school.alumni.achievements.map(achievement => `
                        <div class="achievement-item">${achievement}</div>
                    `).join('')}
                </div>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-phone"></i> Contact Information</h3>
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${school.contact.phone}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${school.contact.email}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-globe"></i>
                        <a href="http://${school.contact.website}" target="_blank">${school.contact.website}</a>
                    </div>
                </div>
                <button class="btn btn--primary" onclick="openModal('contactModal')" style="margin-top: 1rem;">
                    <i class="fas fa-phone"></i>
                    Request Call Back
                </button>
            </div>
        </div>
    `;
    
    showPage('school-detail');
}

function goBack() {
    showPage('schools');
}

// Make functions globally available
window.showSchoolDetail = showSchoolDetail;
window.performSearch = performSearch;
window.filterByCategory = filterByCategory;
window.applyFilters = applyFilters;
window.goBack = goBack;
window.openModal = openModal;
window.closeModal = closeModal;