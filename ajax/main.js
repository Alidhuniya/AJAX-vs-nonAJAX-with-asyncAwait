// async await


// home
const loadHome = async () => {
    const url ="./home.html";
    const home = await fetch(url);
    const res = await home.text();
    console.log(res);
    document.getElementById("datas").innerHTML = res;
}

document.getElementById("link1").addEventListener("click", loadHome);

// home
const loadAbout = async () => {
  const url ="./about.html";
  const home = await fetch(url);
  const res = await home.text();
  console.log(res);
  document.getElementById("datas").innerHTML = res;
}

document.getElementById("link2").addEventListener("click", loadAbout);


// contact
const loadContact = async () => {
  const url ="./contact.html";
  const home = await fetch(url);
  const res = await home.text();
  console.log(res);
  document.getElementById("datas").innerHTML = res;
}

document.getElementById("link3").addEventListener("click", loadContact);
/*

// fetch api
// home
const loadHome = () => {
  const url ="./home.html";
  fetch(url)
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    document.getElementById("datas").innerHTML = data;
  })
}

document.getElementById("link1").addEventListener("click", loadHome);

// about
const loadAbout = () => {
  const url ="./about.html";
  fetch(url)
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    document.getElementById("datas").innerHTML = data;
  })
}

document.getElementById("link2").addEventListener("click", loadAbout);


// Contact
const loadContact = () => {
  const url ="./contact.html";
  fetch(url)
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    document.getElementById("datas").innerHTML = data;
  })
}

document.getElementById("link3").addEventListener("click", loadContact);

*/

/*

// refactor

const refactor = (url) => {
  return fetch(url)
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    document.getElementById("datas").innerHTML = data;
  })
  .catch((error) => {
    console.error(error);
  })
}




// fetch api
// home
const loadHome = () => {
  const url ="./home.html";
  refactor (url)
  
}

document.getElementById("link1").addEventListener("click", loadHome);

// about
const loadAbout = () => {
  const url ="./about.html";
  refactor (url)
}

document.getElementById("link2").addEventListener("click", loadAbout);


// Contact
const loadContact = () => {
  const url ="./contact.html";
  refactor (url)
}

document.getElementById("link3").addEventListener("click", loadContact);

*/


/*
// Home
const loadHome = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./home.html", true);

  xhr.textContentType = "html";

  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = xhr.responseText;
      document.getElementById("datas").innerHTML = data;
    } else if (xhr.status === 404) {
      document.getElementById("datas").innerHTML = "Not Found";
    }
  };

  xhr.send();
};

document.getElementById("link1").addEventListener("click", loadHome);

// About
const loadAbout = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./about.html", true);

  xhr.textContentType = "html";

  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = xhr.responseText;
      document.getElementById("datas").innerHTML = data;
    } else if (xhr.status === 404) {
      document.getElementById("datas").innerHTML = "Not Found";
    }
  };

  xhr.send();
};

document.getElementById("link2").addEventListener("click", loadAbout);

// Contact

// Home
const loadContact = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./contact.html", true);

  xhr.textContentType = "html";

  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = xhr.responseText;
      document.getElementById("datas").innerHTML = data;
    } else if (xhr.status === 404) {
      document.getElementById("datas").innerHTML = "Not Found";
    }
  };

  xhr.send();
};

document.getElementById("link3").addEventListener("click", loadContact);
*/