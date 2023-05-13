import SwiftUI
struct ContentView: View {
    @State var drugList:[Drug] = readFromJSONFile(filename: filename)

    var body: some View {
        VStack{
            NavigationStack{
                List(drugList){ dataTets in
                    DrugView(drugItem: dataTets)
                    .listRowBackground(evenItem_color)
                }
                .listStyle(.plain)
                .navigationTitle(Text("Farmaci"))
                .toolbar{
                    ToolbarItem(placement: .navigationBarTrailing){
                        Button(action:{
                            toggleEditPage()
                            NotificationCenter.default.post(name: Notification.Name("ReloadView"), object: nil)
                        }){
                           Text(verbatim: "Salva")
                                .opacity(_editPage ? 1:0)
                        }
                    }
                }
            }

            BottomNavBar()
        }//end of Vstack
        .onReceive(NotificationCenter.default.publisher(for: Notification.Name("ReloadDrugList"))) { _ in
                drugList = readFromJSONFile(filename: filename)
        }
        .onReceive(NotificationCenter.default.publisher(for: Notification.Name("ReloadView"))) { _ in
            drugList = readFromJSONFile(filename: filename)
        }

    }

}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

