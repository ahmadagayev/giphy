$(".addBtn").on("click", function (e) {
  e.preventDefault();
  var text = $("#text").val();
  var button = $("<button>");
  button.html(text);
  button.addClass("giphyBtn btn btn-primary");
  $(".header").append(button);
  $("#text").val('');
});
let choose = false;
$(".header").on("click", ".giphyBtn", function (e) {
  e.preventDefault();
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=cAeyPwnhU75GWiZWJLNCy4sVESELxvzn&q=${this.innerText}&limit=25&offset=0&rating=g&lang=en`,
    type: "GET",
    success: function (response) {
      // console.log(response.data);
      $(".giphy").empty();
      response.data.forEach(function (item) {
        console.log(item.images);
      });
      response.data.forEach(function (item) {
        $(".giphy").append(`
                    <div class="giphyItem">
                    <img data-src="${item.images.fixed_height.url}" src="${item.images.fixed_height_still.url}" alt="">                
                    </div>
                    `);
      });
    },
    error: function (response) {
      console.log(response);
    },
  });
});


$(".giphy").on("click", ".giphyItem", function (e) {
    e.preventDefault();
    console.log(this);
    // console.log(choose);
    // if(!choose){
        let data_src =$(this).find("img").data("src");
        let img_src = $(this).find("img").attr('src');
        console.log(data_src);
        console.log(img_src);
        $(this).find("img").attr('src',`${data_src}`);
        $(this).find("img").data('src',`${img_src}`);
    //     choose=true;
    // }else{
    //     let data_src =$(this).find("img").data("src");
    //     let img_src = $(this).find("img").attr('src');
    //     console.log(img_src);
    //     $(this).find("img").attr('src',`${data_src}`);
    //     $(this).find("img").attr('data-src',`${img_src}`);
    //     choose=false;
    // }
  });