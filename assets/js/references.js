const references = [
    {
        title: 'Mean curvature of direct image bundles. ',
        journal: '',
        with: '',
        link: "https://arxiv.org/abs/2508.00820",
        arxiv: '2508.00820'
    },
    {
        title: 'A potential theory for the Wess--Zumino--Witten equation in the space of Kähler potentials. ',
        journal: '',
        with: '',
        link: "https://arxiv.org/abs/2410.00710",
        arxiv: '2410.00710'
    },
    {
        title: 'Positively curved Finsler metrics on vector bundles III. ',
        journal: '',
        with: '',
        link: "https://arxiv.org/abs/2312.16848",
        arxiv: '2312.16848'
    },
    {
        title: 'Positively curved Finsler metrics on vector bundles II, ',
        journal: 'Pacific Journal of Mathematics, 326(2023), no.1, 161–186. ',
        with: '',
        link: "https://arxiv.org/abs/2210.12645",
        arxiv: '2210.12645'
    },
    {
        title: 'Positively curved Finsler metrics on vector bundles, ',
        journal: 'Nagoya Math. Journal, 248 (2022), 766-778. ',
        with: '',
        link: "https://arxiv.org/abs/2107.00538",
        arxiv: '2107.00538'
    },
    {
        title: 'A Wess-Zumino-Witten type equation in the space of Kähler potentials in terms of Hermitian-Yang-Mills metrics, ',
        journal: 'Analysis and PDE, Volume 16 (2023), No.2, 341-366. ',
        with: '',
        link: "https://arxiv.org/abs/2001.08623",
        arxiv: '2001.08623'
    },
    {
        title: 'Griffiths extremality, interpolation of norms, and Kähler quantization, ',
        journal: 'Journal of Geometric Analysis 32 (2022), no. 7, Paper No. 203. ',
        with: 'Joint with <a href="https://www.math.umd.edu/~tdarvas/">T. Darvas</a>. ',
        link: "https://arxiv.org/abs/1910.01782",
        arxiv: '1910.01782'
    },
    {
        title: 'A Dirichlet problem in noncommutative potential theory, ',
        journal: 'Michigan Math. Journal, Volume 69, Issue 2 (2020), 369-380. ',
        with: '',
        link: "https://arxiv.org/abs/1804.05278",
        arxiv: '1804.05278'
    },
];



const referenceList = document.getElementById('referenceList');
references.forEach((ref, index) => {
    const listItem = document.createElement('p');
    listItem.innerHTML = `[${index + 1}] ${ref.title} <i>${ref.journal}</i> ${ref.with} <a class="reference-link" href="${ref.link}">ArXiv:${ref.arxiv}.</a>`;
    referenceList.appendChild(listItem);
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});
