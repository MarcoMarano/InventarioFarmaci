import SwiftUI
import Foundation

struct NewItemView: View {
    @Environment(\.dismiss) var dismiss
    @State var drugName: String = ""
    @State var drugDescription: String = ""
    @State private var expirationDate = Date.now
    @State private var insertionDate = Date.now
    
    var body: some View {
        VStack{
            Button(action: {
                print("backToHome")
                dismiss()
            }){
                Image(systemName: "chevron.backward")
                Text(verbatim: "Back")
            }.offset(x:-160, y:10)
            
            NavigationView{
                Form{
                    Section(header: Text("Nome")){
                      TextField("Nome", text: $drugName)
                    }
            
                    Section(header: Text("Descrizione")){
                      TextField("Description", text: $drugDescription)
                    }
                    Section(header: Text("Date")){
                        DatePicker(selection: $insertionDate, in: ...Date.now, displayedComponents: .date){
                            Text("Inserimento")
                        }
                        DatePicker(selection: $expirationDate, in: ...Date.distantFuture, displayedComponents: .date){
                            Text("Scadenza")
                        }
                    }
                    Section{
                        Button("Salva"){
                           saveDrug(name: drugName, description: drugDescription, insDate: dateToString(_dateFormat: insertionDate), expDate: dateToString(_dateFormat: expirationDate), toFile: filename)
                            dismiss()
                        }
                    }
                    
                }
            } .onDisappear() {
                // Aggiorna la lista di farmaci nella ContentView
                NotificationCenter.default.post(name: Notification.Name("ReloadDrugList"), object: nil)
            }
        }
        
        
    }
}

struct NewItemView_Previews: PreviewProvider {
    static var previews: some View {
        NewItemView()
    }
}
