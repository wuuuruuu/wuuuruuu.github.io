// Publications data
const publications = [
    {
        title: "Mean curvature of direct image bundles",
        journal: "",
        collaborators: [],
        arxivLink: "https://arxiv.org/abs/2508.00820",
        arxivId: "2508.00820"
    },
    {
        title: "A potential theory for the Wess--Zumino--Witten equation in the space of Kähler potentials",
        journal: "",
        collaborators: [],
        arxivLink: "https://arxiv.org/abs/2410.00710",
        arxivId: "2410.00710"
    },
    {
        title: "Positively curved Finsler metrics on vector bundles III",
        journal: "",
        collaborators: [],
        arxivLink: "https://arxiv.org/abs/2312.16848",
        arxivId: "2312.16848"
    },
    {
        title: "Positively curved Finsler metrics on vector bundles II",
        journal: {
            name: "Pacific Journal of Mathematics",
            volume: "326",
            year: "2023",
            issue: "no.1",
            pages: "161–186"
        },
        collaborators: [],
        arxivLink: "https://arxiv.org/abs/2210.12645",
        arxivId: "2210.12645"
    },
    {
        title: "Positively curved Finsler metrics on vector bundles",
        journal: {
            name: "Nagoya Math. Journal",
            volume: "248",
            year: "2022",
            pages: "766-778"
        },
        collaborators: [],
        arxivLink: "https://arxiv.org/abs/2107.00538",
        arxivId: "2107.00538"
    },
    {
        title: "A Wess-Zumino-Witten type equation in the space of Kähler potentials in terms of Hermitian-Yang-Mills metrics",
        journal: {
            name: "Analysis and PDE",
            volume: "16",
            year: "2023",
            issue: "No.2",
            pages: "341-366"
        },
        collaborators: [],
        arxivLink: "https://arxiv.org/abs/2001.08623",
        arxivId: "2001.08623"
    },
    {
        title: "Griffiths extremality, interpolation of norms, and Kähler quantization",
        journal: {
            name: "Journal of Geometric Analysis",
            volume: "32",
            year: "2022",
            issue: "no. 7",
            pages: "Paper No. 203"
        },
        collaborators: [
            {
                name: "T. Darvas",
                website: "https://www.math.umd.edu/~tdarvas/"
            }
        ],
        arxivLink: "https://arxiv.org/abs/1910.01782",
        arxivId: "1910.01782"
    },
    {
        title: "A Dirichlet problem in noncommutative potential theory",
        journal: {
            name: "Michigan Math. Journal",
            volume: "69",
            year: "2020",
            issue: "Issue 2",
            pages: "369-380"
        },
        collaborators: [],
        arxivLink: "https://arxiv.org/abs/1804.05278",
        arxivId: "1804.05278"
    }
];

// Function to generate journal HTML
function generateJournalHTML(journal) {
    if (!journal || typeof journal === 'string') {
        return journal ? `<span class="italic">${journal}</span>` : '';
    }
    
    let journalText = journal.name;
    
    if (journal.volume) {
        journalText += `, ${journal.volume}`;
    }
    
    if (journal.year) {
        journalText += ` (${journal.year})`;
    }
    
    if (journal.issue) {
        journalText += `, ${journal.issue}`;
    }
    
    if (journal.pages) {
        journalText += `, ${journal.pages}`;
    }
    
    return `<span class="italic">${journalText}.</span>`;
}

// Function to generate collaborators HTML
function generateCollaboratorsHTML(collaborators) {
    if (!collaborators || collaborators.length === 0) {
        return '';
    }
    
    const collaboratorLinks = collaborators.map(collaborator => {
        if (collaborator.website && collaborator.website.trim() !== '') {
            return `<a href="${collaborator.website}" target="_blank" class="link">${collaborator.name}</a>`;
        } else {
            return collaborator.name;
        }
    });
    
    return ` Joint with ${collaboratorLinks.join(', ')}.`;
}

// Function to generate publication HTML
function generatePublicationHTML(publication, index) {
    const number = index + 1; // 計算編號 (從1開始)
    let html = `
        <div class="publication">
            <span class="pub-number">[${number}]</span>
            <span class="pub-title">${publication.title}.</span>`;
    
    const journalHTML = generateJournalHTML(publication.journal);
    if (journalHTML) {
        html += ` ${journalHTML}`;
    }
    
    const collaboratorsHTML = generateCollaboratorsHTML(publication.collaborators);
    if (collaboratorsHTML) {
        html += `${collaboratorsHTML}`;
    }
    
    html += ` <a href="${publication.arxivLink}" target="_blank" class="link">ArXiv:${publication.arxivId}</a>.
        </div>`;
    
    return html;
}

// Function to render all publications
function renderPublications() {
    const publicationsContainer = document.querySelector('.publications-list');
    if (publicationsContainer) {
        publicationsContainer.innerHTML = publications.map((publication, index) => 
            generatePublicationHTML(publication, index)
        ).join('');
    }
}

// Initialize publications when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderPublications();
});
