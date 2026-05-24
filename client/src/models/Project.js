class Project {
  constructor({ _id, title, description, img, imgAlt, tags, link, lang, order }) {
    this.id = _id;
    this.title = title;
    this.description = description;
    this.img = img;
    this.imgAlt = imgAlt ?? '';
    this.tags = tags ?? [];
    this.link = link;
    this.lang = lang;
    this.order = order ?? 0;
  }

  open() {
    window.open(this.link, '_blank', 'noopener,noreferrer');
  }

  static fromArray(arr) {
    return arr.map((raw) => new Project(raw));
  }
}

export default Project;
