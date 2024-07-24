$(document).ready(function () {
  $("main .main > .sign-con form .input-father input").focus(function () {
    $(".focus").css({ display: "block" });
    $(this)
      .closest(".input-father")
      .find("label")
      .css({ color: "#aaaaaa", top: "18%", left: "1%", "font-size": ".9vw" });
  });

  $("main .main > .sign-con form .input-father input").blur(function () {
    var value = $(this).val();
    var length = value.length;
    if (length > 0) {
      $(this)
        .closest(".input-father")
        .find("label")
        .css({ color: "#aaaaaa", top: "18%", left: "1%", "font-size": ".9vw" });
    } else {
      $(this).closest(".input-father").find("label").css({
        color: "#5e5e5e",
        top: "50%",
        left: "2%",
        "font-size": "1.2vw",
      });
    }
  });

  //   #################

  $(".user_name").focus(function () {
    $(".focus").css({ width: "93.6% ", top: "15%", left: "4.2%" });
    $(".user_name").keyup(function () {
      var name = $(this).val();
      name_len = name.length;
      if (name_len > 0) {
        $(".name span").html(name);
      } else {
        $(".name span").html("user_name");
      }
    });
  });
  $(".user_email").focus(function () {
    $(".focus").css({ width: "93.6% ", top: "37%", left: "4.2%" });
    $(".user_email").keyup(function () {
      var email = $(this).val();
      email_len = email.length;
      if (email_len > 0) {
        $(".email span").html(email);
      } else {
        $(".email span").html("user_email@gmail.com");
      }
    });
  });
  $(".user_password").focus(function () {
    $(".focus").css({ width: "93.6% ", top: "59%", left: "4.2%" });
    $(".user_password").keyup(function () {
      var pass = $(this).val();
      pass_len = pass.length;
      if (pass_len > 0) {
        $(".password").val(pass);
      } else {
        $(".password").val("hegazy_num_1");
      }
    });
  });
  $(".day_birth").click(function () {
    $(".focus").css({
      display: "block",
      width: "19.4%",
      top: "81%",
      left: "20%",
    });
  });
  $(".month_birth").click(function () {
    $(".focus").css({
      display: "block",
      width: "19.4%",
      top: "81%",
      left: "42.2%",
    });
  });
  $(".year_birth").click(function () {
    $(".focus").css({
      display: "block",
      width: "19.4%",
      top: "81%",
      left: "64.3%",
    });
  });
  $(".month_birth").click(function () {
    $(".focus").css({
      display: "block",
      width: "19.4%",
      top: "81%",
      left: "42.2%",
    });
  });
  var d_click = 0;
  var m_click = 0;
  var y_click = 0;
  $(".day_birth").click(function () {
    d_click++;
    if (d_click == 2) {
      var day_num = $(this).val();
      $(".day .value").html(day_num).css({ top: "0%" });
    }
  });
  $(".month_birth").click(function () {
    m_click++;
    if (m_click == 2) {
      var month_num = $(this).val();
      $(".month .value").html(month_num).css({ top: "0%" });
    }
  });
  $(".year_birth").click(function () {
    y_click++;
    if (y_click == 2) {
      var year_num = $(this).val();
      $(".year .value").html(year_num).css({ top: "0%" });
    }
  });

  //   ###################

  $("main .main > .sign-con button").click(function () {
    $("main .main > .sign-con").animate({ opacity: "0" }, 500, function () {
      $("main .main > .sign-con").animate({ width: "0%" }, 1000, function () {
        $("main").animate({ height: "68vh" }, 1000, function () {
          $(".information").slideDown(1500);
          $("footer").css({display:"flex"})
        });
      });
    });
  });
});
