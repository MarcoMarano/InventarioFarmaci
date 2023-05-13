import SwiftUI

struct BottomNavBar: View {
    @State private var _itemPage: Bool = false
    @State private var _calendarPage:Bool = false
    @State private var _searchPage:Bool = false
    @State private var _homePage:Bool = false
    @State private var _edit:Bool = false
    var body: some View {
            HStack(alignment: .center){
                Spacer()
                Button(action:{
                    print("new item")
                    _itemPage = true
                }){
                    Image("plus")
                        .resizable()
                        .frame(width: 32.0, height: 32.0)
                }
                .sheet(isPresented: $_itemPage ){
                    NewItemView()
                }
                
                Spacer()
                Button(action:{
                    print("calendarPage")
                    _calendarPage = true
                }){
                    Image("calendar")
                        .resizable()
                        .frame(width: 32.0, height: 32.0)
                       
                } .sheet(isPresented: $_calendarPage ){
                    calendarPage()
                }
                Spacer()
                Button(action:{
                    print("searchpage")
                    _searchPage = true
                }){
                    Image("search")
                        .resizable()
                        .frame(width: 32.0, height: 32.0)
                } .sheet(isPresented: $_searchPage ){
                    searchPage()
                }
                Spacer()
                Button(action:{
                    print("editPage")
                    _edit = true
                    toggleEditPage()
                    NotificationCenter.default.post(name: Notification.Name("ReloadView"), object: nil)
                }){
                    Image("pencil")
                        .resizable()
                        .frame(width: 32.0, height: 32.0)
                } 
        
                Spacer()
            }
    }
}

struct BottomNavBar_Previews: PreviewProvider {
    static var previews: some View {
        BottomNavBar()
    }
}
