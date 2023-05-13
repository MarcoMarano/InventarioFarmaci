import Foundation


extension JSONSerialization {
    
    static func loadJSON(withFilename filename: String) throws -> Any? {
        let fm = FileManager.default
        let urls = fm.urls(for: .documentDirectory, in: .userDomainMask)
        if let url = urls.first {
            var fileURL = url.appendingPathComponent(filename)
            fileURL = fileURL.appendingPathExtension("json")
            let data = try Data(contentsOf: fileURL)
            let jsonObject = try JSONSerialization.jsonObject(with: data, options: [.mutableContainers, .mutableLeaves])
            return jsonObject
        }
        return nil
    }
    
    static func save(jsonObject: Any, toFilename filename: String) throws -> Bool{
        let fm = FileManager.default
        let urls = fm.urls(for: .documentDirectory, in: .userDomainMask)
        if let url = urls.first {
            var fileURL = url.appendingPathComponent(filename)
            fileURL = fileURL.appendingPathExtension("json")
            let data = try JSONSerialization.data(withJSONObject: jsonObject, options: [.prettyPrinted])
            try data.write(to: fileURL, options: [.atomicWrite])
            return true
        }
        
        return false
    }
}

func _writeDataToJsonFile(fileNameDataDir: String, jsonObj: Any){
    let is_valid = JSONSerialization.isValidJSONObject(jsonObj)
    if is_valid {
        do{
          _ =  try JSONSerialization.save(jsonObject: jsonObj, toFilename: fileNameDataDir)
        }catch{
            log.creatLog(path: LOG_DIR_PATH, author: "DrugController", message: "Error in writing the json")
        }
    }
    else{
        log.creatLog(path: LOG_DIR_PATH, author: "DrugController", message: "Error json is not valid")
        return
    }
}
