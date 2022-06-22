const home_page = document.querySelector(".home_page");
const mundarija_btn = document.querySelector(".mundarija_btn");
const language_btn = document.querySelector(".language_btn");
const about_book_btn = document.querySelector(".about_book_btn");
const mundarija_desc = document.querySelector(".mundarija_desc");
const language_desc = document.querySelector(".language_desc");
const about_book_desc = document.querySelector(".about_book_desc");
const heading_book = document.querySelector(".heading_book");
const mundarija_page = document.querySelector(".mundarija_page");
const latin_mundarija = document.querySelector(".latin_mundarija");
const to_home_btn = document.querySelector(".to_home_btn");
const btn_bolim = document.querySelectorAll(".btn_bolim");
const kril_mundarija = document.querySelector(".kril_mundarija");
const lotin_list = document.querySelector(".lotin_list");
const kril_list = document.querySelector(".kril_list");
const lotim_item = document.querySelectorAll(".lotim_item");
const kril_item = document.querySelectorAll(".kril_item");
const top_nav = document.querySelector(".top_nav");
const prev_btn = document.querySelector(".prev_btn");
const to_mundarija_btn = document.querySelector(".to_mundarija_btn");
const next_btn = document.querySelector(".next_btn");
const about_book_title = document.querySelector(".about_book_title");
const about_heading = document.querySelector(".about_heading");
const about_desc = document.querySelector(".about_desc");
const about_booK_page = document.querySelector(".about_booK_page");
const back_home = document.querySelector(".back_home");

//...
let language = "latin";
let page = 0;
//...

mundarija_btn.addEventListener("click", () => {
  home_page.classList.toggle("d-none");
  mundarija_page.classList.toggle("d-none");
  if (language == "latin") {
    latin_mundarija.classList.toggle("d-none");
  } else {
    kril_mundarija.classList.toggle("d-none");
  }
});

language_btn.addEventListener("click", () => {
  if (language == "latin") {
    language = "kril";
    mundarija_desc.textContent = "Мундарижа";
    language_desc.textContent = "Йозувни озгартириш";
    about_book_desc.textContent = "Китоб хакида";
    heading_book.textContent = "ОГАЙ ОНА";
  } else {
    language = "latin";
    mundarija_desc.textContent = "Mundarija";
    language_desc.textContent = "Yozuvni o'zgartirish";
    about_book_desc.textContent = "Kitob haqida";
    heading_book.textContent = "O'GAY ONA";
  }
});

to_home_btn.addEventListener("click", () => {
  home_page.classList.toggle("d-none");
  mundarija_page.classList.toggle("d-none");
  if (language == "latin") {
    latin_mundarija.classList.toggle("d-none");
  } else {
    kril_mundarija.classList.toggle("d-none");
  }
});

for (let btn of btn_bolim) {
  btn.addEventListener("click", () => {
    mundarija_page.classList.toggle("d-none");
    top_nav.classList.toggle("d-none");
    if (language == "latin") {
      for (let item of lotim_item) {
        item.classList.remove("none");
        item.classList.add("none");
      }
      lotim_item[+btn.dataset.btnId].classList.remove("none");
      lotin_list.classList.toggle("d-none");
    } else {
      for (let item of kril_item) {
        item.classList.remove("none");
        item.classList.add("none");
      }
      kril_item[+btn.dataset.btnId].classList.remove("none");
      kril_list.classList.toggle("d-none");
    }
    page = +btn.dataset.btnId;
    if (page == 0) {
      prev_btn.disabled = true;
    } else if (page == 5) {
      next_btn.disabled = true;
    }
  });
}

to_mundarija_btn.addEventListener("click", () => {
  top_nav.classList.toggle("d-none");
  mundarija_page.classList.toggle("d-none");
  if (language == "latin") {
    lotin_list.classList.toggle("d-none");
  } else {
    kril_list.classList.toggle("d-none");
  }
  prev_btn.disabled = false;
  next_btn.disabled = false;
});

prev_btn.addEventListener("click", () => {
  next_btn.disabled = false;
  page = page - 1;
  if (page == 0) {
    prev_btn.disabled = true;
  }
  if (language == "latin") {
    for (let item of lotim_item) {
      item.classList.remove("none");
      item.classList.add("none");
    }
    lotim_item[page].classList.remove("none");
  } else {
    for (let item of kril_item) {
      item.classList.remove("none");
      item.classList.add("none");
    }
    kril_item[page].classList.remove("none");
  }
});

next_btn.addEventListener("click", () => {
  prev_btn.disabled = false;
  page = page + 1;
  if (page == 5) {
    next_btn.disabled = true;
  }
  if (language == "latin") {
    for (let item of lotim_item) {
      item.classList.remove("none");
      item.classList.add("none");
    }
    lotim_item[page].classList.remove("none");
  } else {
    for (let item of kril_item) {
      item.classList.remove("none");
      item.classList.add("none");
    }
    kril_item[page].classList.remove("none");
  }
});

about_book_btn.addEventListener("click", () => {
  home_page.classList.toggle("d-none");
  about_booK_page.classList.toggle("d-none");
  if (language == "latin") {
    about_book_title.textContent = "KITOB HAQIDA";
    about_heading.textContent = `Ahmad Lutfiy - O’GAY ONA`;
    about_desc.textContent = `O‘zbek o‘quvchilariga «Saodat asri qissalari», «Qaynona» romanlari orqali yaxshi tanish bo‘lgan Ahmad Lutfi Qozonchining mazkur asari sizga xamroh bo‘lishiga aminmiz.`;
  } else {
    about_book_title.textContent = "КИТОБ ХАКИДА";
    about_heading.textContent = `Аҳмад Лутфий - ЎГАЙ ОНА`;
    about_desc.textContent = `Ўзбек ўқувчиларига «Саодат асри қиссалари», «Қайнона» романлари орқали яхши таниш бўлган Аҳмад Лутфи Қозончининг мазкур асари сизга хамроҳ бўлишига аминмиз.`;
  }
});
back_home.addEventListener("click", () => {
  home_page.classList.toggle("d-none");
  about_booK_page.classList.toggle("d-none");
});
