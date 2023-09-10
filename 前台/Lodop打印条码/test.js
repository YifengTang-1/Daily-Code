window.onload = function () {
    for (let i = 0; i < 4; i++) {
        print("万级洁净手术室空气监测", "空气", "2022-03-01【中心-1/5】", "院感管理科【cfu/30min•φ90皿】", "*E2022030100201*");
    }
//
    function print(ItemDesc, NormObject, ItemDate, LocDesc, BarCode) {
        var LODOP = getLodop();
        LODOP.PRINT_INIT("");  //打印任务的名称
        LODOP.PRINT_INITA(0, 0, "60mm", "30mm", "环境卫生学");
        LODOP.SET_PRINT_STYLE("FontSize", 9);
        LODOP.SET_PRINT_STYLE("Bold", 0);
        LODOP.ADD_PRINT_TEXT("3mm", "3mm", "60mm", "3mm", ItemDate);//（上，右，宽，高，内容）
        LODOP.ADD_PRINT_TEXT("7mm", "3mm", "45mm", "3mm", ItemDesc);
        LODOP.ADD_PRINT_TEXT("7mm", "40mm", "25mm", "3mm", NormObject);
        LODOP.ADD_PRINT_TEXT("11mm", "3mm", "60mm", "3mm", LocDesc);
        LODOP.ADD_PRINT_BARCODE("16mm", "3mm", "60mm", "12mm", "EAN128C", BarCode);//条码
        //LODOP.ADD_PRINT_TEXT("27mm", "3mm", "60mm", "3mm", BarCode);
        // LODOP.PRINT();
        LODOP.PREVIEW();//预览
    }
}
//ItemDesc万级洁净手术室空气监测^NormObject空气^ItemDate2022-03-01【中心-1/5】^LocDesc院感管理科【cfu/30min•φ90皿】^BarCode*E2022030100201*^BarCodeNo*E2022030100201* 