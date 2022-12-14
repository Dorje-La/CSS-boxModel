"user strict";

//const url = "https://api.github.com/users/Dorje-La";

// const response = fetch(url);

// response.then(
//     function(){
//     console.log("running");
// });

// response.catch(function(){
//     console.log("Error");
// });

// const response = fetch(url)
//     .then(()=>{
//         console.log("running");
//     })
//     .catch(()=>{
//         console.log("Error");
//     })
//     ;

    // const response = fetch(url)
    // .then(()=>console.log("running"))
    // .catch(()=>console.log("Error"))
    
    // const obj = {
    //     login : "11",
    //     "login-id" :"1234",
    // };

    // console.log(obj);

    // const response = fetch(url)
    // .then((response)=> response.json())
    // .then((data)=>console.log(data))
    // .catch(()=> console.log("Error"));

    // //console.log("Start Response");
    // const response = fetch(url)  // asynchronous code
    // .then((response)=>
    //     //console.log("First then");
    //     response.json()
    // )
    // .then((data)=>
    //     //console.log("Second then");
    //     console.log(data)   //asychronous code
    // )
    // .catch((e)=> console.log(e));
    //console.log("Response Ended");

    //console.log("Start Fetchhicg");

    // (async() => {
    //     const res =  await fetch(url);
    //     // console.log("fetch running");
    //      const data = await res.json();
    //      console.log(data);
    //  })();


    //console.log("Fetching Ended");

const inputBox = document.querySelector("#search-username");
const searchUsernameBtn = document.querySelector("#search-usernameBtn");
const userInfo = document.querySelector("#intro");
const loading = document.querySelector("#loading");
const reposSection = document.querySelector(".repos");
const repoList = document.querySelector(".repo-list");
const filterInput = document.querySelector(".filter-repos");

const url = "https://api.github.com/users/";
//const usernameInput = "gorakhjoshi";

const displayProfile = (profile) => {
  return `<div class="user-info" id="user-info">
          <figure>
            <img
              alt="user avatar"
              src=${profile.avatar_url}
            />
          </figure>
          <div>
            <h2>
              <a href=${profile.html_url}><strong>${profile.name}</strong></a
              >&nbsp;<strong class="username">${profile.login}</strong>
            </h2>
            <p>${profile.bio}</p>
            <p><strong class="blue">Location: </strong>${profile.location}</p>
            <p>
              <strong class="blue">Repos: </strong>${profile.public_repos}
              <strong class="blue">Followers: </strong>${profile.followers}
              <strong class="blue">Following: </strong>${profile.following}
            </p>
          </div>
        </div>
      `;
};

const fetchProfile = async () => {
    const usernameInput = inputBox.value;
  loading.innerText = "Loading...";
  try {
    const res = await fetch(`${url}${usernameInput}`);
    const data = await res.json();
    if (data.bio) {
      console.log(data);
      userInfo.innerHTML = displayProfile(data);
    } else {
      userInfo.innerText = "";
      reposSection.innerText = "";
      loading.innerHTML = `<h3 style = "color: red">Username Not Found!</h1>`;
    }
  } catch (error) {
    console.log("Error occured!");
    loading.innerText = "";
  }
};
//fetchProfile();

const fetchRepos = async () => {
    const usernameInput = inputBox.value;
  try {
    const res = await fetch(`${url}${usernameInput}/repos`);
    const data = await res.json();
    displayRepos(data);
  } catch (error) {
    console.log(error);
  }
};

//fetchRepos();

const displayRepos = (repos) => {
  reposSection.classList.remove("hide");
  filterInput.classList.remove("hide");
  console.log(repos);
  for (const repo of repos) {
    const listItem = document.createElement("li");
    listItem.classList.add("repo");
    listItem.innerHTML = `
    <h3>${repo.name}</h3>
    <br />
    <div>${devicons[repo.language]}</div>
    <br />
    <br />
    <a href = ${repo.html_url} > View Repo </>
    `;
    // console.log(listItem);
    repoList.append(listItem);
  }
};

searchUsernameBtn.addEventListener('click', () => {
    fetchProfile();
    fetchRepos();
    inputBox.value = "";
});

filterInput.addEventListener("input", (e) => {

    const searchLowerText = search.toLowerCase();
    console.log(document.querySelectorAll(".repo"));

    for(const repo of repos){
       const repoText = repo.innerText.toLowerCase();

       if(repoText.includes(search)){
            repo.classList.remove("hide");
       }else{
            repo.classList.add('hide')
       }
    }
});

// for programming language icons
const devicons = {
  Assembly: '<i class="devicon-labview-plain colored"></i> Assembly',
  "C#": '<i class="devicon-csharp-plain colored"></i> C#',
  "C++": '<i class="devicon-cplusplus-plain colored"></i> C++',
  C: '<i class="devicon-c-plain colored"></i> C',
  Clojure: '<i class="devicon-clojure-plain colored"></i> C',
  CoffeeScript:
    '<i class="devicon-coffeescript-plain colored"></i> CoffeeScript',
  Crystal: '<i class="devicon-crystal-plain colored"></i> Crystal',
  CSS: '<i class="devicon-css3-plain colored"></i> CSS',
  Dart: '<i class="devicon-dart-plain colored"></i> Dart',
  Dockerfile: '<i class="devicon-docker-plain colored"></i> Docker',
  Elixir: '<i class="devicon-elixir-plain colored"></i> Elixir',
  Elm: '<i class="devicon-elm-plain colored"></i> Elm',
  Erlang: '<i class="devicon-erlang-plain colored"></i> Erlang',
  "F#": '<i class="devicon-fsharp-plain colored"></i> F#',
  Go: '<i class="devicon-go-plain colored"></i> Go',
  Groovy: '<i class="devicon-groovy-plain colored"></i> Groovy',
  HTML: '<i class="devicon-html5-plain colored"></i> HTML',
  Haskell: '<i class="devicon-haskell-plain colored"></i> Haskell',
  Java: '<i class="devicon-java-plain colored" style="color: #ffca2c"></i> Java',
  JavaScript: '<i class="devicon-javascript-plain colored"></i> JavaScript',
  Julia: '<i class="devicon-julia-plain colored"></i> Julia',
  "Jupyter Notebook": '<i class="devicon-jupyter-plain colored"></i> Jupyter',
  Kotlin:
    '<i class="devicon-kotlin-plain colored" style="color: #796bdc"></i> Kotlin',
  Latex: '<i class="devicon-latex-plain colored"></i> Latex',
  Lua: '<i class="devicon-lua-plain-wordmark colored" style="color: #0000d0"></i> Lua',
  Matlab: '<i class="devicon-matlab-plain colored"></i> Matlab',
  Nim: '<i class="devicon-nixos-plain colored" style="color: #FFC200"></i> Nim',
  Nix: '<i class="devicon-nixos-plain colored"></i> Nix',
  ObjectiveC: '<i class="devicon-objectivec-plain colored"></i> ObjectiveC',
  OCaml: '<i class="devicon-ocaml-plain colored"></i> OCaml',
  Perl: '<i class="devicon-perl-plain colored"></i> Perl',
  PHP: '<i class="devicon-php-plain colored"></i> PHP',
  PLSQL: '<i class="devicon-sqlite-plain colored"></i> PLSQL',
  Processing:
    '<i class="devicon-processing-plain colored" style="color: #0096D8"></i> Processing',
  Python:
    '<i class="devicon-python-plain colored" style="color: #3472a6"></i> Python',
  R: '<i class="devicon-r-plain colored"></i> R',
  Ruby: '<i class="devicon-ruby-plain colored"></i> Ruby',
  Rust: '<i class="devicon-rust-plain colored" style="color: #DEA584"></i> Rust',
  Sass: '<i class="devicon-sass-original colored"></i> Sass',
  Scala: '<i class="devicon-scala-plain colored"></i> Scala',
  Shell:
    '<i class="devicon-bash-plain colored" style="color: #89E051"></i> Shell',
  Solidity: '<i class="devicon-solidity-plain colored"></i> Solidity',
  Stylus: '<i class="devicon-stylus-plain colored"></i> Stylus',
  Svelte: '<i class="devicon-svelte-plain colored"></i> Svelte',
  Swift: '<i class="devicon-swift-plain colored"></i> Swift',
  Terraform: '<i class="devicon-terraform-plain colored"></i> Terraform',
  TypeScript: '<i class="devicon-typescript-plain colored"></i> TypeScript',
  "Vim Script": '<i class="devicon-vim-plain colored"></i> Vim Script',
  Vue: '<i class="devicon-vuejs-plain colored"></i> Vue',
  null: '<i class="devicon-markdown-original"></i> Markdown',
};