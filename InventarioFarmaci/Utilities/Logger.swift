import SystemPackage
import Foundation

let space = " "
class Logger{
  private  var path: String
  private  var message: String
  private  var author: String
  private  var timestamp: String
    
    init() {
        self.path = ""
        self.message = ""
        self.author = ""
        self.timestamp = ""
    }
    
  private  func getTimeStamp() -> String{
        let now = Date()
        let formatter = DateFormatter()
        formatter.timeZone = TimeZone.current
        formatter.dateFormat = "yyyy-MM-dd HH:mm"
        return formatter.string(from: now)
    }
    
   private func getLog() -> String{
        let log = timestamp + space + author + space
                 + path + space + message
        return log
    }
    
   private func setPath(_path: String){ path = _path}
   private func setAuth(_author: String){author = _author}
   private func setTimestamp(){timestamp = getTimeStamp()}
   private func setMessage(_message: String){message = _message}
    
   private func writeLog(){
        do{
            let fd = try FileDescriptor.open(path, .writeOnly, options: [.append, .create], permissions: .ownerReadWrite)
            try fd.closeAfter {
              _ = try fd.writeAll(getLog().utf8)
            }
        }catch{
            print("error in writeLog()")
        }
    }
    
    
   public func creatLog(path: String , author: String , message: String){
        setMessage(_message: message)
        setTimestamp()
        setAuth(_author: author)
        setPath(_path: path)
        writeLog()
    }
    
}
