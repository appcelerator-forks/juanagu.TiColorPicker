var ticolorpicker=require('ti.org.dmfs.android.colorpicker');
ticolorpicker.addEventListener(ticolorpicker.SUCESS_COLOR_PICKER, function pickerColor(e) {
ticolorpicker.removeEventListener(ticolorpicker.SUCESS_COLOR_PICKER,pickerColor);
var color=e.color;
var w=Ti.UI.createWindow({
height:Ti.UI.FILL,width:Ti.UI.FILL,backgroundColor:color
});
w.open();
});
ticolorpicker.pickerColor();