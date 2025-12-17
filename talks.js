// Talks data organized by year
const talksData = {
    2025: [
        {
            title: "Seminar",
            location: "Sorbonne University",
            date: "November 2025",
            website: ""
        }, 
        {
            title: "Seminar",
            location: "University of Cologne",
            date: "October 2025",
            website: ""
        },
        {
            title: "Conference on Several Complex Variables--L² Estimates and Extensions--",
            location: "Tohoku University, Sendai",
            date: "September 2025",
            website: ""
        },
        {
            title: "Workshop on Cohomological and metric aspects of Hermitian and almost complex manifolds",
            location: "Rényi Institute of Mathematics",
            date: "September 2025",
            website: ""
        },
        {
            title: "Several Complex Variables and Complex Geometry Conference dedicated to the mathematical work of Yum Tong Siu",
            location: "Academia Sinica",
            date: "January 2025",
            website: ""
        }
    ],
    2024: [
        {
            title: "Math Department Colloquium",
            location: "National Tsing Hua University",
            date: "October 2024",
            website: ""
        },
        {
            title: "Young Mathematicians Workshop on SCV",
            location: "Osaka Metropolitan University",
            date: "August 2024",
            website: ""
        },
        {
            title: "Taiwanese Mathematical Society Annual Meeting, Special Sessions",
            location: "",
            date: "January 2024",
            website: ""
        }
    ],
    2023: [
        {
            title: "The Fourth Taiwan-Japan Joint Conference on Differential Geometry",
            location: "NCTS",
            date: "November 2023",
            website: ""
        },
        {
            title: "Complex analysis and geometry: celebrating the 70+1th birthday of László Lempert, short talk",
            location: "",
            date: "June 2023",
            website: ""
        },
        {
            title: "Geometry and Geometric Analysis Seminar",
            location: "Purdue University",
            date: "April 2023",
            website: ""
        }
    ],
    2022: [
        {
            title: "Colloquium",
            location: "National Cheng Kung University",
            date: "December 2022",
            website: ""
        },
        {
            title: "The 5th International Workshop, Geometry of Submanifolds and Integrable Systems",
            location: "Takamatsu Japan",
            date: "November 2022",
            website: ""
        },
        {
            title: "KIAS, seminar talk",
            location: "virtual",
            date: "November 2022",
            website: ""
        },
        {
            title: "Rutgers Complex Analysis/Geometry Seminar",
            location: "virtual",
            date: "April 2022",
            website: ""
        },
        {
            title: "Taiwanese Mathematical Society Annual Meeting, Special Sessions",
            location: "",
            date: "January 2022",
            website: ""
        }
    ],
    2021: [
        {
            title: "Math Department Colloquium",
            location: "National Tsing Hua University",
            date: "November 2021",
            website: ""
        },
        {
            title: "AS-NCTS Geometry Seminar",
            location: "Academia Sinica",
            date: "September 2021",
            website: ""
        },
        {
            title: "Virtual East-West Several Complex Variables Seminar",
            location: "",
            date: "September 2021",
            website: ""
        },
        {
            title: "Chongqing University of Technology",
            location: "virtual",
            date: "July 2021",
            website: ""
        },
        {
            title: "NCTS Differential Geometry Seminar",
            location: "National Taiwan University",
            date: "April 2021",
            website: ""
        }
    ],
    2020: [
        {
            title: "Taipei Postdoc Seminar",
            location: "Academia Sinica",
            date: "November 2020",
            website: ""
        },
        {
            title: "AS-NCTS Geometry Seminar",
            location: "Academia Sinica",
            date: "October 2020",
            website: ""
        },
        {
            title: "AMS Sectional Meeting",
            location: "Purdue University",
            date: "April 2020",
            note: "(meeting canceled)",
            website: ""
        },
        {
            title: "Geometry and Topology Seminar",
            location: "University of Wisconsin-Madison",
            date: "February 2020",
            website: ""
        }
    ],
    2019: [
        {
            title: "Geometric Analysis Seminar",
            location: "Purdue University",
            date: "October 2019",
            website: ""
        }
    ],
    2018: [
        {
            title: "Informal Geometric Analysis Seminar",
            location: "University of Maryland",
            date: "December 2018",
            website: ""
        },
        {
            title: "AMS Sectional Meeting",
            location: "University of Arkansas",
            date: "November 2018",
            website: ""
        },
        {
            title: "AMS Sectional Meeting",
            location: "Ohio State University",
            date: "March 2018",
            website: ""
        },
        {
            title: "Geometric Analysis Seminar",
            location: "Purdue University",
            date: "March 2018",
            website: ""
        }
    ]
};

// Function to generate talk HTML
function generateTalkHTML(talk) {
    let html = `<span class="talk-title">${talk.title},</span>`;
    
    if (talk.location) {
        html += ` <span class="talk-location">${talk.location},</span>`;
    }
    
    html += ` <span class="talk-date">${talk.date}.</span>`;
    
    if (talk.note) {
        html += ` <span class="talk-note">${talk.note}</span>`;
    }
    
    if (talk.website && talk.website.trim() !== '') {
        html += ` <a href="${talk.website}" class="link" target="_blank">website</a>`;
    }
    
    return `<li>${html}</li>`;
}

// Function to generate year section HTML
function generateYearSectionHTML(year, talks) {
    const talkCount = talks.length;
    const isCurrentYear = year === 2025; // 2025 is expanded by default
    const chevron = isCurrentYear ? '▼' : '▶';
    const activeClass = isCurrentYear ? 'active' : '';
    const hiddenClass = isCurrentYear ? '' : 'hidden';
    
    const talksHtml = talks.map(generateTalkHTML).join('');
    
    return `
        <div class="year-section">
            <button class="year-toggle ${activeClass}" data-year="${year}">
                <span class="chevron">${chevron}</span>
                <span class="year-title">${year}</span>
            </button>
            <ul class="talk-list ${hiddenClass}" data-year="${year}">
                ${talksHtml}
            </ul>
        </div>`;
}

// Function to render all talks
function renderTalks() {
    const talksContainer = document.querySelector('.talks-list');
    if (talksContainer) {
        // Sort years in descending order
        const sortedYears = Object.keys(talksData).sort((a, b) => b - a);
        
        const talksHtml = sortedYears.map(year => 
            generateYearSectionHTML(parseInt(year), talksData[year])
        ).join('');
        
        talksContainer.innerHTML = talksHtml;
    }
}

// Initialize talks when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderTalks();
    
    // Initialize collapsible functionality after rendering
    if (typeof initializeCollapsibleTalks === 'function') {
        initializeCollapsibleTalks();
    }
});
