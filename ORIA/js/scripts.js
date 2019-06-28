// JavaScript Document
function hide_all_graphs() {
  $('#blue_graph').hide();
  $('#purple_graph').hide();
  $('#teal_graph').hide();
  $('#green_graph').hide();
  $('#grayscale_graph').removeClass('half_opacity');
}

function show_graph(color) {
  hide_all_graphs();
  $('#' + color + '_graph').show();
  $('#grayscale_graph').addClass('half_opacity');
}