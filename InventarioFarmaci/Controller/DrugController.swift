import Foundation
import SwiftUI

var log = Logger()

struct Drug : Identifiable, Codable{
    var id = UUID()
    var name: String
    var description: String
    var insertionDate: String
    var expirationDate: String
}

func saveDrug(name: String, description: String, insDate: String, expDate: String, toFile filename: String) {
    let fileURL = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first!.appendingPathComponent(filename)
    var drugs = [Drug]()
    if FileManager.default.fileExists(atPath: fileURL.path) {
        do {
            let data = try Data(contentsOf: fileURL)
            let decoder = JSONDecoder()
            drugs = try decoder.decode([Drug].self, from: data)
        } catch {
            print("Error decoding drugs: \(error)")
        }
    }
    let drug = Drug(name: name, description: description, insertionDate: insDate, expirationDate: expDate)
    drugs.append(drug)
    let encoder = JSONEncoder()
    encoder.outputFormatting = .prettyPrinted
    print("Result : \(drugs)")
    do {
        let data = try encoder.encode(drugs)
        try data.write(to: fileURL)
        print("path \(fileURL)")
    } catch {
        print("Error saving drugs: \(error)")
    }
}

func readFromJSONFile(filename: String) -> [Drug] {
    var drugs: [Drug] = []
    do {
        // read data from file
        let data = try Data(contentsOf: fileURL)
        
        // parse JSON data into array of dictionaries
        let jsonArray = try JSONSerialization.jsonObject(with: data, options: []) as! [[String: Any]]
        
        // iterate over the array of dictionaries and create a Drug object for each dictionary
        for jsonDictionary in jsonArray {
            let name = jsonDictionary["name"] as! String
            let description = jsonDictionary["description"] as! String
            let insDateStr = jsonDictionary["insertionDate"] as! String
            let expDateStr = jsonDictionary["expirationDate"] as! String
        
            // create Drug object and append to the drugs array
            let drug = Drug(name: name, description: description, insertionDate: insDateStr, expirationDate: expDateStr)
            drugs.append(drug)
        }
    } catch {
        print(error.localizedDescription)
    }
    
    return drugs
}
