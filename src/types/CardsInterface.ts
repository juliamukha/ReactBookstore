export type ICards = {
  title: string,
  subtitle: string,
  isbn13: string,
  price: string,
  image: string,
  url: string
};

export type ICard = {
  error: string,
  title: string,
  subtitle: string,
  authors: string,
  publisher: string,
  isbn10: string,
  isbn13: string,
  pages: string,
  year: string,
  rating: string,
  desc: string,
  price: string,
  image: string,
  url: string,
  pdf: { [key: string]: string }
};

export const card: ICard[] = [{
  "error": "0",
  "title": "An Introduction to C & GUI Programming, 2nd Edition",
  "subtitle": "Security in the Cloud",
  "authors": "Julien Vehent",
  "publisher": "Manning",
  "isbn10": "1617294136",
  "isbn13": "9781912047451",
  "pages": "384",
  "year": "2018",
  "rating": "4",
  "desc": "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
  "price": "$14.92",
  "image": "https://itbook.store/img/books/9781912047451.png",
  "url": "https://itbook.store/books/9781912047451",
  "pdf": {
    "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
    "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf"
  }
}];

export const cards: ICards[] = [
  {
    "title": "An Introduction to C & GUI Programming, 2nd Edition",
    "subtitle": "Security in the Cloud",
    "isbn13": "9781912047451",
    "price": "$14.92",
    "image": "https://itbook.store/img/books/9781912047451.png",
    "url": "https://itbook.store/books/9781912047451"
  }, {
    "title": "Snowflake: The Definitive Guide",
    "subtitle": "Architecting, Designing, and Deploying on the Snowflake Data Cloud",
    "isbn13": "9781098103828",
    "price": "$58.90",
    "image": "https://itbook.store/img/books/9781098103828.png",
    "url": "https://itbook.store/books/9781098103828"
  }, {
    "title": "Python for Data Analysis, 3rd Edition",
    "subtitle": "Data Wrangling with pandas, NumPy, and Jupyter",
    "isbn13": "9781098104030",
    "price": "$36.18",
    "image": "https://itbook.store/img/books/9781098104030.png",
    "url": "https://itbook.store/books/9781098104030"
  }, {
    "title": "Reliable Machine Learning",
    "subtitle": "Applying SRE Principles to ML in Production",
    "isbn13": "9781098106225",
    "price": "$43.99",
    "image": "https://itbook.store/img/books/9781098106225.png",
    "url": "https://itbook.store/books/9781098106225"
  }, {
    "title": "Data Visualization with Python and JavaScript, 2nd Edition",
    "subtitle": "Scrape, Clean, Explore, and Transform Your Data",
    "isbn13": "9781098111878",
    "price": "$60.99",
    "image": "https://itbook.store/img/books/9781098111878.png",
    "url": "https://itbook.store/books/9781098111878"
  }, {
    "title": "Learning Microsoft Power BI",
    "subtitle": "Transforming Data into Insights",
    "isbn13": "9781098112844",
    "price": "$40.46",
    "image": "https://itbook.store/img/books/9781098112844.png",
    "url": "https://itbook.store/books/9781098112844"
  }, {
    "title": "C++ Software Design",
    "subtitle": "Design Principles and Patterns for High-Quality Software",
    "isbn13": "9781098113162",
    "price": "$47.03",
    "image": "https://itbook.store/img/books/9781098113162.png",
    "url": "https://itbook.store/books/9781098113162"
  }, {
    "title": "Terraform: Up and Running, 3rd Edition",
    "subtitle": "Writing Infrastructure as Code",
    "isbn13": "9781098116743",
    "price": "$41.99",
    "image": "https://itbook.store/img/books/9781098116743.png",
    "url": "https://itbook.store/books/9781098116743"
  }, {
    "title": "Flutter and Dart Cookbook",
    "subtitle": "Developing Full-Stack Applications for the Cloud",
    "isbn13": "9781098119515",
    "price": "$50.52",
    "image": "https://itbook.store/img/books/9781098119515.png",
    "url": "https://itbook.store/books/9781098119515"
  }, {
    "title": "Python Data Science Handbook, 2nd Edition",
    "subtitle": "Essential Tools for Working with Data",
    "isbn13": "9781098121228",
    "price": "$56.16",
    "image": "https://itbook.store/img/books/9781098121228.png",
    "url": "https://itbook.store/books/9781098121228"
  }, {
    "title": "Raspberry Pi Cookbook, 4th Edition",
    "subtitle": "Software and Hardware Problems and Solutions",
    "isbn13": "9781098130923",
    "price": "$14.99",
    "image": "https://itbook.store/img/books/9781098130923.png",
    "url": "https://itbook.store/books/9781098130923"
  }, {
    "title": "Azure Maps Using Blazor Succinctly",
    "subtitle": "",
    "isbn13": "9781642002263",
    "price": "$0.00",
    "image": "https://itbook.store/img/books/9781642002263.png",
    "url": "https://itbook.store/books/9781642002263"
  }, {
    "title": "Full Stack Quarkus and React",
    "subtitle": "Hands-on full stack web development with Java, React, and Kubernetes",
    "isbn13": "9781800562738",
    "price": "$39.99",
    "image": "https://itbook.store/img/books/9781800562738.png",
    "url": "https://itbook.store/books/9781800562738"
  }, {
    "title": "Mathematics for Game Programming and Computer Graphics",
    "subtitle": "Explore the essential mathematics for creating, rendering, and manipulating 3D virtual environments",
    "isbn13": "9781801077330",
    "price": "$49.99",
    "image": "https://itbook.store/img/books/9781801077330.png",
    "url": "https://itbook.store/books/9781801077330"
  }, {
    "title": "Architecting and Building High-Speed SoCs",
    "subtitle": "Design, develop, and debug complex FPGA-based systems-on-chip",
    "isbn13": "9781801810999",
    "price": "$32.99",
    "image": "https://itbook.store/img/books/9781801810999.png",
    "url": "https://itbook.store/books/9781801810999"
  }, {
    "title": "Web Development with Julia and Genie",
    "subtitle": "A hands-on guide to high-performance server-side web development with the Julia programming language",
    "isbn13": "9781801811132",
    "price": "$39.99",
    "image": "https://itbook.store/img/books/9781801811132.png",
    "url": "https://itbook.store/books/9781801811132"
  }, {
    "title": "Java Memory Management",
    "subtitle": "A comprehensive guide to garbage collection and JVM tuning",
    "isbn13": "9781801812856",
    "price": "$34.99",
    "image": "https://itbook.store/img/books/9781801812856.png",
    "url": "https://itbook.store/books/9781801812856"
  }, {
    "title": "Test-Driven Development with C++",
    "subtitle": "A simple guide to writing bug-free Agile code",
    "isbn13": "9781803242002",
    "price": "$44.99",
    "image": "https://itbook.store/img/books/9781803242002.png",
    "url": "https://itbook.store/books/9781803242002"
  }, {
    "title": "Software Test Design",
    "subtitle": "Write comprehensive test plans to uncover critical bugs in web, desktop, and mobile apps",
    "isbn13": "9781804612569",
    "price": "$44.99",
    "image": "https://itbook.store/img/books/9781804612569.png",
    "url": "https://itbook.store/books/9781804612569"
  }, {
    "title": "Microservices with Go",
    "subtitle": "Building scalable and reliable microservices with Go",
    "isbn13": "9781804617007",
    "price": "$29.99",
    "image": "https://itbook.store/img/books/9781804617007.png",
    "url": "https://itbook.store/books/9781804617007"
  }
];