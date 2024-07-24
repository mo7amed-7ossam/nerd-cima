$(document).ready(function () {
  // main slider
  var sliding = setInterval(running, 8000);
  function running() {
    var showing = $(".show").attr("id");
    current_id = showing.split("_");
    id_num = current_id[1];
    if (id_num < 3) {
      $(".show").addClass("hide").removeClass("show");
      id_num++;
      next_id = "son_" + id_num;
      $("#" + next_id)
        .addClass("show")
        .removeClass("hide");
    } else {
      $(".show").addClass("hide").removeClass("show");
      id_num = 1;
      next_id = "son_" + id_num;
      $("#" + next_id)
        .addClass("show")
        .removeClass("hide");
    }
  }

  $("main .next").click(function () {
    var showing = $(".show").attr("id");
    current_id = showing.split("_");
    id_num = current_id[1];
    if (id_num < 3) {
      $(".show").addClass("hide").removeClass("show");
      id_num++;
      next_id = "son_" + id_num;
      $("#" + next_id)
        .addClass("show")
        .removeClass("hide");
    } else {
      $(".show").addClass("hide").removeClass("show");
      id_num = 1;
      next_id = "son_" + id_num;
      $("#" + next_id)
        .addClass("show")
        .removeClass("hide");
    }
  });
  $("main .priv").click(function () {
    var showing = $(".show").attr("id");
    current_id = showing.split("_");
    id_num = current_id[1];
    console.log(id_num);
    if (id_num > 1) {
      $(".show").addClass("hide").removeClass("show");
      id_num--;
      next_id = "son_" + id_num;
      $("#" + next_id)
        .addClass("show")
        .removeClass("hide");
    } else {
      $(".show").addClass("hide").removeClass("show");
      id_num = 3;
      next_id = "son_" + id_num;
      $("#" + next_id)
        .addClass("show")
        .removeClass("hide");
    }
  });

  // ######################## most viewed slider #####################
  var tra_x = 0;
  $(".most .next").click(function () {
    if (tra_x < 50.00000000000001 && tra_x >= 0) {
      tra_x = tra_x + 100 / 12;
      console.log(tra_x);
      $(".container .most .son .items-con").css({
        transform: "translateX(-" + tra_x + "%)",
      });
    }
  });

  $(".most .priv").click(function () {
    if (tra_x >= 8.333333333333334 && tra_x <= 50.00000000000001) {
      tra_x = tra_x - 100 / 12;
      console.log(tra_x);
      $(".container .most .son .items-con").css({
        transform: "translateX(-" + tra_x + "%)",
      });
    }
  });

  // ###################### info ####################

  $(".item").click(function () {
    var name = $(this).find(".name").html();
    var img = $(this).find("img").attr("src");
    var story = $(this).find(".story").val();
    var classification = $(this).find(".classification").html();
    var quality = $(this).find(".quality").html();
    var Translation = $(this).find(".Translation").html();
    $(".info .name").html(name + " :");
    $(".info img").attr("src", img);
    $(".info .story").html(story);
    $(".info .classification").html(classification);
    $(".info .quality").html(quality);
    $(".info .Translation").html(Translation);
    $(".info-father").css({ display: "flex" });
    $("body").css({ "overflow-y": "hidden" });
  });

  $(".info .close").click(function () {
    $("body").css({ "overflow-y": "scroll" });
    $(".info-father").css({ display: "none" });
  });

});

