
// TODO: edit your page here, not in the html file
// head
var TITLE = "Implementation and evaluation of Neural Radiance Fields as an immersive technology in industry at technology start-up Dromni: An application study";
var FIRST_AUTHOR = "Dominik Widmann";
var FIRST_AUTHOR_LINK = "mailto:do.widmann"+ "@" + "gmail.com";
var PROGRAM_NAME = "Online Media - Summer 2024";
var SUPERVISOR = "Prof. Dr. Uwe Hahne";
var SUPERVISOR_LINK = "https://uhahne.github.io/";
var SECOND_SUPERVISOR = "Dr. Maximilian Prexl";
var SECOND_SUPERVISOR_LINK = "https://dromni.eu/about-us/";
// link buttons
var hideThesis = false;
var THESIS_LINK = "static/pdfs/Bachelor_Thesis_Dominik_Widmann_269961.pdf";
var hideSupplementary = true;
var SUPPLEMENTARY_LINK = "tbd";
var hideGithub = true;
var GITHUB_LINK = "tbd";
var hideArxiv = true;
var ARXIV_LINK = "tbd";
// teaser image or video
var showTeaserVideo = false;  // preferable exclusive
var showTeaserImage = true; // either video or image
var TEASER_VIDEO_LINK = "static/videos/banner_video.mp4";
var TEASER_IMAGE_LINK = "static/images/teaser.png";
var TEASER_TEXT = "Nerfstudios Live Web Viewer: Displays various scene configuration options and showcases the camera inputs used within the scene.";
// abstract
var ABSTRACT = "<p>This thesis explores the implementation and evaluation of Neural Radiance Fields (NeRFs) as an immersive technology within industrial applications. The research is centered around the use of the Nerfstudio framework, which consolidates various state-of-the-art NeRF techniques under a unified structure. The work delves into the theoretical foundations of NeRFs, examining improvements and models that enhance the algorithm’s ability to synthesize novel views of complex scenes with high precision. A significant part of the paper is dedicated to providing a practical guide for users, especially those without a technical background, on how to effectively use Smartphone cameras for data collection. This includes detailed instructions on setting up the framework, overcoming common installation challenges, and optimizing data acquisition using consumer electronics. The research emphasizes the importance of reproducibility and the impact of various factors on the quality of datasets used in NeRF training. In the applied section, the thesis explores the potential of NeRF technology in industrial contexts through case studies, demonstrating its ability to create immersive 3D representations of environments such as construction sites.</p>"
// image carousel
var showImageCarousel = true;
var icImageLinks = ["static/images/ABau_Fahrstuhl-01.png", "static/images/ABau_Fahrstuhl-02.png", "static/images/ABau_Fahrstuhl-03.png"]; 
var icImageDescriptions = ["A novel view from the A-Bau data set.", "A novel view from the A-Bau data set.", "A novel view from the A-Bau data set."]; 
// YouTube video
var hideYouTubeVideo = true;
var YOUTUBE_LINK = "https://www.youtube.com/embed/W3I3kAg2J7w?si=oVCFsIV7Xg_l8Z88"
// Video carousel
var showVideoCarousel = true;
var VIDEO_CAROUSEL_HEADING = "Example novel view videos from a construction site"
var vcVideoLinks = ["static/videos/ABau_Fahrstuhl_frei.mp4", "static/videos/ABau_Fahrstuhl_Gerüst.mp4", "static/videos/ABau_Fahrstuhl_wechselnd.mp4"];
// An embedded PDF document (could be a poster)
var hidePDF = true;
var PDF_HEADING = "A PDF document"
var PDF_LINK = 'static/pdfs/sample.pdf';
// BibTeX code
var hideBibTeX = false;
var BIBTEX_TITLE = "BibTeX"
var BIBTEX_CODE = '@phdthesis{widmannImplementationEvaluationNeural2024,<br> type = {Bachelor Thesis},<br> title = {Implementation and Evaluation of {{Neural Radiance Fields}} as an Immersive Technology in Industry at Technology Start-up {{Dromni}}: {{An}} Application Study},<br> author = {Widmann, Dominik},<br> year = {2024},<br> school = {Furtwangen University}<br>}';

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
//document.getElementById('YOUTUBE').hidden = hideYouTubeVideo;
//document.getElementById('YOUTUBE_LINK').setAttribute("src", YOUTUBE_LINK);
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
//document.getElementById('PDF_PREVIEW').hidden = hidePDF;
//document.getElementById('PDF_HEADING').innerHTML = PDF_HEADING;
//document.getElementById('PDF_LINK').setAttribute('src',PDF_LINK);

// BIBTEX
document.getElementById('BIBTEX').hidden = hideBibTeX;
document.getElementById('BIBTEX_TITLE').innerHTML = BIBTEX_TITLE;
document.getElementById('BIBTEX_CODE').innerHTML = BIBTEX_CODE;



