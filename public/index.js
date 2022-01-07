


document.getElementById('btn').addEventListener('click', ()=>{
  document.getElementById('loading-icon').style.display='block'
  let url2 = document.getElementById('scanner-input').value 
  axios({
      method:'get',
      url:'http://localhost:4000/scanner',
      params: {
        url: url2
      }
  }) .then(res => {

    console.log(res.data)
    divRes = document.getElementById('result')
    if (res.data === true){
      document.getElementById('loading-icon').style.display='none'
      divRes.innerHTML  = '<span class="red">Faqe jo e sigurtë.</span>'+
      '<i class="fa fa-thumbs-down" style="font-size:48px;color:red">'
    }
    else if(res.data === false){
      document.getElementById('loading-icon').style.display='none'
      divRes.innerHTML  = '<span class="green">Faqe e sigurtë.</span>'+
      '<i class="fa fa-thumbs-up" style="font-size:48px;color:green"></i>'
    }
    else{
      document.getElementById('loading-icon').style.display='none'
      divRes.innerHTML  = '<p class="error"> Faqja nuk mund të skenohet shkaku i errorit: </p>'+
      `<p class="error">${res.data}</p>`
    }
  })
})







