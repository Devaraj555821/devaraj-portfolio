const projectDetails = {
  systolic: {
    category: "01 / SYSTEMS · AUGUST–SEPTEMBER 2026",
    title: "Building a Systolic Array Simulator for Evaluating Tiling and Different Dataflows",
    overview: "I developed a CPU-based 2D systolic array accelerator simulator for matrix multiplication. The simulator models data movement and execution at cycle level so different dataflows and hardware configurations can be compared.",
    points: [
      "Implemented Weight-Stationary (WS), Output-Stationary (OS), and Row-Stationary (RS) dataflows.",
      "Built tiled matrix multiplication with cycle-level execution modelling.",
      "Modelled SRAM capacity and bandwidth constraints, memory stalls, double buffering, processing-element activity, and utilisation.",
      "Compared dataflows and explored design choices across PE-array sizes and SRAM-bandwidth configurations using roofline-based analysis.",
      "Created Pytest cases to validate numerical correctness, dataflow behaviour, memory handling, and configurable array architectures."
    ],
    tags: ["Python", "NumPy", "Pytest", "Systolic Arrays", "WS / OS / RS", "Roofline Analysis"],
    result: "The work enabled comparison of memory traffic, arithmetic intensity, and overall performance across configurable array and bandwidth settings."
  },
  skin: {
    category: "02 / COMPUTER VISION · MARCH–APRIL 2026",
    title: "Boundary-Aware Attention Driven UNet++ Approach for Skin Lesion Segmentation",
    overview: "I developed a boundary-aware deep-learning pipeline for automated skin-lesion segmentation on the ISIC 2018 dataset, with attention mechanisms and a loss function designed to account for lesion boundaries.",
    points: [
      "Prepared image preprocessing, augmentation, and stratified train/validation/test splits for ISIC 2018.",
      "Implemented and compared UNet, UNet++, Attention UNet, and a proposed CBAM-Enhanced UNet++ with encoder-side attention.",
      "Combined weighted BCE, Soft Dice, and Sobel-based boundary loss in a hybrid objective.",
      "Applied 8-fold test-time augmentation for evaluation."
    ],
    tags: ["ISIC 2018", "UNet", "UNet++", "Attention UNet", "CBAM", "Weighted BCE", "Soft Dice", "Sobel Boundary Loss", "TTA"],
    result: "Reported results: Dice 0.9088 · IoU 0.8413 · Precision 0.9147 · Recall 0.9227 · HD95 12.02 px. The proposed approach outperformed the baseline architectures in the reported evaluation."
  },
  deblur: {
    category: "03 / IMAGE PROCESSING · SEPTEMBER–NOVEMBER 2025",
    title: "Image Enhancement: Blind Motion Deblurring & Restoration",
    overview: "I developed an image-enhancement and blind motion-deblurring pipeline, comparing classical restoration methods with optimisation-based blind restoration while studying the effect of restored image quality on object detection.",
    points: [
      "Compared Wiener and Richardson–Lucy restoration with optimisation-based Blind RL-TV algorithms.",
      "Worked with unknown blur kernels and evaluated real-world performance on the GoPro dataset.",
      "Integrated YOLOv8 to examine object-detection behaviour on restored images.",
      "Analysed the relationship between PSNR/SSIM image-quality measures and downstream detection confidence."
    ],
    tags: ["Python", "Wiener Filter", "Richardson–Lucy", "Blind RL-TV", "GoPro", "YOLOv8", "PSNR", "SSIM"],
    result: "The best reported real-world performance on GoPro was 21.21 dB PSNR. Higher PSNR/SSIM did not translate into higher detection confidence, highlighting a gap between human-perceived image quality and machine perception."
  },
  sentiment: {
    category: "04 / NLP · JULY–NOVEMBER 2025",
    title: "Sentiment Analysis Using Deep Learning Architectures: A Comparative Study",
    overview: "I studied sentiment classification on the Sentiment140 Twitter dataset by comparing convolutional, recurrent, and hybrid deep-learning architectures.",
    points: [
      "Compared CNN, CNN+LSTM, CNN+BiLSTM, and a hybrid architecture on 1.6 million labelled tweets.",
      "Performed text cleaning, tokenisation, padding, and used pretrained GloVe and Word2Vec embeddings.",
      "Implemented a hybrid architecture combining Kim-CNN, DCNN, and BiGRU with attention to capture local, global, and contextual features.",
      "Evaluated models using accuracy, precision, recall, and F1-score."
    ],
    tags: ["Sentiment140", "CNN", "LSTM", "BiLSTM", "Kim-CNN", "DCNN", "BiGRU", "Attention", "GloVe", "Word2Vec"],
    result: "The hybrid model achieved the best performance among the architectures compared in the project. The resume does not specify a numerical score, so none is displayed here."
  },
  detection: {
    category: "05 / EVOLUTIONARY COMPUTING · MARCH–MAY 2025",
    title: "Object Detection using Genetic Algorithms",
    overview: "I developed a self-driven object-detection system using genetic algorithms for optimisation of classification and localisation, with a focus on vehicle detection in road-scene imagery.",
    points: [
      "Created a custom dataset of 33,000+ YOLO-annotated road-scene frames.",
      "Covered diverse road objects including cars, trucks, bikes, and traffic lights to support detection robustness.",
      "Used genetic algorithms to optimise detection parameters for classification and localisation.",
      "Built the end-to-end computer-vision workflow, from dataset creation through optimisation-driven training."
    ],
    tags: ["Python", "OpenCV", "Genetic Algorithms", "YOLO-format Annotations", "Object Detection", "Vehicle Detection"],
    result: "The project brought dataset creation, evolutionary optimisation, and computer-vision model training together in an end-to-end detection workflow."
  }
};

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const dialog = document.querySelector("#project-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogCategory = document.querySelector("#dialog-category");
const dialogOverview = document.querySelector("#dialog-overview");
const dialogPoints = document.querySelector("#dialog-points");
const dialogTags = document.querySelector("#dialog-tags");
const dialogResult = document.querySelector("#dialog-result");
const toast = document.querySelector(".toast");

function closeMenu() {
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
  nav?.classList.remove("is-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav.classList.toggle("is-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("click", (event) => {
  if (nav?.classList.contains("is-open") && !nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

function showProject(projectId) {
  const project = projectDetails[projectId];
  if (!project || !dialog) return;
  dialogCategory.textContent = project.category;
  dialogTitle.textContent = project.title;
  dialogOverview.textContent = project.overview;
  dialogPoints.replaceChildren();
  project.points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    dialogPoints.append(item);
  });
  dialogTags.replaceChildren();
  project.tags.forEach((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    dialogTags.append(item);
  });
  dialogResult.textContent = project.result || "";
  dialog.showModal();
}

document.querySelectorAll("[data-open-project]").forEach((button) => {
  button.addEventListener("click", () => showProject(button.dataset.openProject));
});

document.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog?.addEventListener("close", () => {
  document.querySelectorAll("[data-open-project]").forEach((button) => button.blur());
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if ("IntersectionObserver" in window) {
  const sections = [...document.querySelectorAll("main section[id]")];
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => activeObserver.observe(section));
}

document.querySelector("#current-year").textContent = String(new Date().getFullYear());

// Keep the animated ticker from moving for visitors who prefer reduced motion.
if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
  document.querySelector(".focus-track")?.style.setProperty("animation", "none");
}
