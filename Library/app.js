let library = [];
// let title;
// let author;
// let page;
// let publish;
// let read;

const newBook = (ev) =>{
    ev.preventDefault(); 

    let book =
    {
        id : library.length !== 0 ? library[library.length - 1].id + 1 : 1,
        title : document.getElementById('title').value,
        author : document.getElementById('author').value,
        page : document.getElementById('page').value,
        publish : document.getElementById('publish').value,
        read : document.querySelector('input[name="readIt"]:checked').value
        // read : document.getElementById('readIt').value
        // readit : Date.now()
    }
    if ( book.title !== "" && 
        book.author !== "" &&
        book.page !== "" &&
        book.publish !== ""
        )
        {
            library.push(book);
            console.warn('added', {library});
            makeBox(book.title, book.author, book.page, book.publish,book.read, book.id );
        }
    // title =  book.title;
    // author = book.author;
    // page = book.page;
    // publish = book.publish;
    // read =  book.read;
    // makeBox(title, author, page, publish, read)
    document.getElementById("form").reset();
}


// function reloadGrid()
// {
//     makeBox(title, author, page, publish, read)
// }

// button.addEventListener('click', () => deleterUser) fonction flecher pour pas que ce click solo
const shelf = document.querySelector('#shelf')
const modifyContainer = document.querySelector('#modifyContainer')

function makeBox(title, author, page, publish, read, id)
{
    // library.forEach((book) =>{ faire ca pour modify
        const newbook = document.createElement('div');
        newbook.classList.add("newBook");
        newbook.id ="test"
        newbook.innerHTML = (`Title : ${title} <br/> Author : ${author}<br/> Number of pages :${page} pages <br/> Published : ${publish}<br/> <a href="modify.html"><button type="submit" onclick="modifytBox(${id})"> modifier </button></a> <button  onclick="supprimer(${id})" type="submit" "> supprimer </button>`);
        shelf.appendChild(newbook);
        
        if(read == 'yes')
        {
            newbook.setAttribute('style', ' background-image: linear-gradient(-225deg, #24e013 0%, #10ff08 56%, #24e013 100% ');
        }
        else
        {
            newbook.setAttribute('style', ' background-image: linear-gradient(-225deg, #c70c0c 0%, #ff0808 56%, #c70c0c 100% ');
        }
}

function supprimer(id)
{
    library.forEach((book) => {
        const bookPosInArray = library.indexOf(book);
        book.id === parseInt(id) && library.splice(bookPosInArray, 1)
    });
    const element = document.getElementById("test")
    element.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', newBook)
})

function updateValue(id)
{
    // library.forEach((book) => {
    // const bookPosInArray = library.indexOf(book);
    // book.id === parseInt(id)}); NORMALEMENT bookPosInArray = le bon id
    // const title = library[0].title
    // const author = library[0].author
    // const page = library[0].page
    // const publish = library[0].publish
    // const read = library[0].read

    // const modifybook = document.createElement('div');
    // modifybook.classList.add("modifyBook");
    // modifybook.id ="test2"
    // modifybook.innerHTML = (`Title : ${title} <br/> Author : ${author}<br/> Number of pages :${page} pages <br/> Published : ${publish}<br/> did you read it ? ${read}`);
    // shelf.appendChild(modifybook);
}
// function modifytBox(id)
// {
//     const Ntitle = library[0].title
//     const Nauthor = library[0].author
//     const Npage = library[0].page
//     const Npublish = library[0].publish
//     // const Nread = library[0].read
//     // library.forEach((book) =>{ faire ca pour modify
//     const modifybook = document.createElement('div');
//     modifybook.classList.add("modifyBook");
//     modifybook.id ="test2"
//     modifybook.innerHTML = (`Title : ${Ntitle} <br/> Author : ${Nauthor}<br/> Number of pages :${Npage} pages <br/> Published : ${Npublish}<br/> `);
//     modifyContainer.appendChild(modifybook);
        
    // if(Nread == 'yes')
    // {
    //     newbook.setAttribute('style', ' background-image: linear-gradient(-225deg, #24e013 0%, #10ff08 56%, #24e013 100% ');
    // }
    // else
    // {
    //     newbook.setAttribute('style', ' background-image: linear-gradient(-225deg, #c70c0c 0%, #ff0808 56%, #c70c0c 100% ');
    // }
    // })
    // const modify = document.createElement('button')
    // newbook.classList.add("book_"+author);
    // modify.textContent = ("modify ?")
    // shelf.appendChild(modify);
// }

// function updateBox(title )//recup la class de la box
// {
//     newbook.innerHTML = ("Title : "+title +'<br/> Author : ' +author+'<br/> Number of pages :'+page+" pages"+'<br/> Published :'+publish+'<br/> <button type="submit" id="'+title+'"> modifier </button>');
    
// }




// const newbook = document.createElement('div');
// newbook.classList.add('newbook');
// newbook.textContent = '\n' + JSON.stringify(book, '\t', 2 );
// shelf.appendChild(newbook);

    // let convert = book.toString();
    // const newbook = document.createElement('div');
    // newbook.classList.add('newbook');
    // newbook.innerHTML = ("Title : "+book.title +'<br/> Author : ' +book.author+'<br/> Number of pages :'+book.page+" pages"+'<br/> Published :'+book.value);
    // shelf.appendChild(newbook);
    // if(book.read == 'yes')
    // {
    //     newbook.setAttribute('style', ' background-image: linear-gradient(-225deg, #24e013 0%, #10ff08 56%, #24e013 100% ');
    // }
    // else
    // {
    //     newbook.setAttribute('style', ' background-image: linear-gradient(-225deg, #c70c0c 0%, #ff0808 56%, #c70c0c 100% ');
    // }
    // library.push(book);
    // console.warn('added', {library});
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(library, '\t', 2); 