function PhimService() {
    this.layDanhSachPhim = function() {
        return $.ajax({
            url: '../Data/menu.json',
            type: 'GET'
        })
    }
}