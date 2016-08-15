function printLables(arr) {
  let html = '' ;
  for (let lable of arr){
    html += `
      <small class="small-caps dib mb3 pa2 b--near-black bw2 shadow-2 br1 lable">${lable.name}</small>
    `
  }
  return html;
}

export default printLables
