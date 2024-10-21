
// TODO: edit your page here, not in the html file
// head
var TITLE = "Student Thesis Project Page";
var FIRST_AUTHOR = "The First Author";
var FIRST_AUTHOR_LINK = "tbd";
var PROGRAM_NAME = "Study program name and year/semester";
var SUPERVISOR = "The supervisor";
var SUPERVISOR_LINK = "tbd";
var SECOND_SUPERVISOR = "Second supervisor";
var SECOND_SUPERVISOR_LINK = "tbd";
// link buttons
var hideThesis = false;
var THESIS_LINK = "tbd";
var hideSupplementary = true;
var SUPPLEMENTARY_LINK = "tbd";
var hideGithub = true;
var GITHUB_LINK = "tbd";
var hideArxiv = true;
var ARXIV_LINK = "tbd";
// teaser image or video
var showTeaserVideo = false;  // preferable exclusive
var showTeaserImage = false; // either video or image
var TEASER_VIDEO_LINK = "static/videos/banner_video.mp4";
var TEASER_IMAGE_LINK = "static/images/noteaser.jpg";
var TEASER_TEXT = "Describe the teaser image or video. It should be self-explaining so that the image/video plus this text make sense without reading the abstract or the full thesis. The image/video has to be impressive as it is the first impression a visitor gets.";
// abstract
var ABSTRACT = "<p>Your abstract text comes here. Use less than 1920 characters and summarize your work here. State your contribution to the scientific community or the main selling point of your thesis.</p><p>It may contain multiple paragraphs, but try to avoid it.</p>"
// image carousel
var showImageCarousel = true;
var icImageLinks = ["static/images/carousel2.jpg", "static/images/carousel3.jpg", "static/images/carousel4.jpg"]; 
var icImageDescriptions = ["This is carousel2.jpg...", "This is carousel3.jpg", "This is carousel4.jpg"]; 
// YouTube video
var hideYouTubeVideo = true;
var YOUTUBE_LINK = "https://www.youtube.com/embed/W3I3kAg2J7w?si=oVCFsIV7Xg_l8Z88"
// Video carousel
var showVideoCarousel = true;
var VIDEO_CAROUSEL_HEADING = "Heading of the video carousel"
var vcVideoLinks = ["static/videos/carousel1.mp4", "static/videos/carousel2.mp4", "static/videos/carousel3.mp4"];
// An embedded PDF document (could be a poster)
var hidePDF = false;
var PDF_HEADING = "A PDF document"
var PDF_LINK = 'static/pdfs/sample.pdf';
// BibTeX code
var hideBibTeX = false;
var BIBTEX_TITLE = "BibTeX"
var BIBTEX_CODE = 'Copy your BibTeX code here';

// Code to include the variable in the HTML (DOM manipulation) - no need to edit
// head information
document.getElementById('TITLE').innerHTML = TITLE;
document.getElementById('FIRST_AUTHOR').innerHTML = FIRST_AUTHOR;
document.getElementById('FIRST_AUTHOR').setAttribute("href", FIRST_AUTHOR_LINK);
document.getElementById('PROGRAM_NAME').innerHTML = PROGRAM_NAME;
document.getElementById('SUPERVISOR').innerHTML = SUPERVISOR;
document.getElementById('SUPERVISOR').setAttribute("href", SUPERVISOR_LINK);
document.getElementById('SECOND_SUPERVISOR').innerHTML = SECOND_SUPERVISOR;
document.getElementById('SECOND_SUPERVISOR').setAttribute("href", SECOND_SUPERVISOR_LINK);
// link buttons
document.getElementById('THESIS').hidden = hideThesis;
document.getElementById('THESIS_LINK').setAttribute("href", THESIS_LINK);
document.getElementById('SUPPLEMENTARY').hidden = hideSupplementary;
document.getElementById('SUPPLEMENTARY_LINK').setAttribute("href", SUPPLEMENTARY_LINK);
document.getElementById('GITHUB').hidden = hideGithub;
document.getElementById('GITHUB_LINK').setAttribute("href", GITHUB_LINK);
document.getElementById('ARXIV').hidden = hideArxiv;
document.getElementById('ARXIV_LINK').setAttribute("href", ARXIV_LINK);
// teaser video or image
if (showTeaserVideo) {
    document.getElementById('tree').hidden = false;
    document.getElementById('TEASER_VIDEO').setAttribute("src", TEASER_VIDEO_LINK);
    document.getElementById('TEASER_IMAGE').hidden = true;
} else if (showTeaserImage) {
    document.getElementById('TEASER_IMAGE').hidden = false;
    document.getElementById('TEASER_IMAGE').setAttribute("src", TEASER_IMAGE_LINK);
    document.getElementById('tree').hidden = true;
} else {
    document.getElementById('tree').hidden = true;
    document.getElementById('TEASER_IMAGE').hidden = false;
    document.getElementById('TEASER_IMAGE').setAttribute("src", "static/images/noteaser.jpg");
}
document.getElementById('TEASER_TEXT').innerHTML = TEASER_TEXT;
// abstract
document.getElementById('ABSTRACT').innerHTML = ABSTRACT;
// image carousel
if (showImageCarousel) {
    var carouselSection = document.getElementById('IMAGE_CAROUSEL');
    var carouselInner = document.createElement('div');
    carouselInner.className = 'hero-body';
    carouselSection.appendChild(carouselInner);
    var carouselContainer = document.createElement('div');
    carouselContainer.className = 'container';
    carouselInner.appendChild(carouselContainer);
    var carouselResults = document.createElement('div');
    carouselResults.id = 'results-carousel';
    carouselResults.className = 'carousel results-carousel';
    carouselContainer.appendChild(carouselResults);
    for (var i = 0; i < icImageLinks.length; i++) {
        var carouselItem = document.createElement('div');
        carouselItem.className = 'item';

        var img = document.createElement('img');
        img.src = icImageLinks[i];
        img.alt = icImageDescriptions[i];

        var caption = document.createElement('h2');
        caption.className = 'subtitle has-text-centered';
        caption.innerHTML = icImageDescriptions[i];

        carouselItem.appendChild(img);
        carouselItem.appendChild(caption);
        carouselResults.appendChild(carouselItem);
    }
}
// YouTube video
document.getElementById('YOUTUBE').hidden = hideYouTubeVideo;
document.getElementById('YOUTUBE_LINK').setAttribute("src", YOUTUBE_LINK);
// Video carousel
if (showVideoCarousel) {
    var videoCarouselSection = document.getElementById('VIDEO_CAROUSEL');
    var videoCarouselInner = document.createElement('div');
    videoCarouselInner.className = 'hero-body';
    videoCarouselSection.appendChild(videoCarouselInner);
    var videoCarouselContainer = document.createElement('div');
    videoCarouselContainer.className = 'container';
    videoCarouselInner.appendChild(videoCarouselContainer);
    var videoCarouselHeading = document.createElement('h2');
    videoCarouselHeading.id= 'VIDEO_CAROUSEL_HEADING';
    videoCarouselHeading.className= 'title is-3';
    videoCarouselHeading.textContent = VIDEO_CAROUSEL_HEADING;
    videoCarouselContainer.appendChild(videoCarouselHeading);
    var videoCarouselResults = document.createElement('div');
    videoCarouselResults.id = 'results-carousel';
    videoCarouselResults.className = 'carousel results-carousel';
    videoCarouselContainer.appendChild(videoCarouselResults);

    for (var i = 0; i < vcVideoLinks.length; i++) {
        var videoCarouselItem = document.createElement('div');
        videoCarouselItem.className = 'item item-video' + (i + 1);

        var video = document.createElement('video');
        video.poster = '';
        video.id = 'video' + (i + 1);
        video.autoplay = true;
        video.controls = true;
        video.muted = true;
        video.loop = true;
        video.height = '100%';

        var source = document.createElement('source');
        source.src = vcVideoLinks[i];
        source.type = 'video/mp4';

        video.appendChild(source);
        videoCarouselItem.appendChild(video);
        videoCarouselResults.appendChild(videoCarouselItem);
    }
}
// PDF preview
document.getElementById('PDF_PREVIEW').hidden = hidePDF;
document.getElementById('PDF_HEADING').innerHTML = PDF_HEADING;
document.getElementById('PDF_LINK').setAttribute('src',PDF_LINK);

// BIBTEX
document.getElementById('BIBTEX').hidden = hideBibTeX;
document.getElementById('BIBTEX_TITLE').innerHTML = BIBTEX_TITLE;
document.getElementById('BIBTEX_CODE').innerHTML = BIBTEX_CODE;



