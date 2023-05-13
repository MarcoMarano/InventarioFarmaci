import SwiftUI

struct MyForm: View {
    @State private var name: String = ""
    @State private var description: String = ""
    @State private var insDate: Date = Date()
    @State private var expDate: String = ""
    
    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("Informazioni")) {
                    TextField("Nome", text: $name)
                    TextField("Descrizione", text: $description)
                }
                
                Section(header: Text("Date")) {
                    DatePicker("Data di inizio", selection: $insDate, displayedComponents: [.date])
                    TextField("Data di scadenza", text: $expDate)
                }
                
                Section {
                    Button("Salva") {
                        let data = MyFormData(name: name, description: description, insDate: insDate, expDate: expDate)
                        saveFormDataAsJSON(data: data, directory: .documentDirectory, filename: "formData.json")
                    }
                }
            }
            .navigationTitle("Il mio form")
        }
    }
    
    func saveFormDataAsJSON(data: MyFormData, directory: FileManager.SearchPathDirectory, filename: String) {
        let encoder = JSONEncoder()
        encoder.outputFormatting = .prettyPrinted
        
        do {
            let fileURL = FileManager.default.urls(for: directory, in: .userDomainMask).first!.appendingPathComponent(filename)
            let jsonData = try encoder.encode(data)
            try jsonData.write(to: fileURL)
            print("Dati salvati con successo in \(fileURL.path)")
        } catch {
            print("Errore durante il salvataggio dei dati: \(error.localizedDescription)")
        }
    }
}

struct MyFormData: Codable {
    var name: String
    var description: String
    var insDate: Date
    var expDate: String
}
