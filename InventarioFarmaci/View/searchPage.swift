import SwiftUI

struct searchPage: View {
    @Environment(\.dismiss) var dismiss
    var body: some View {
        VStack{
            Button(action: {
                print("backToHome")
                dismiss()
            }){
                Image(systemName: "chevron.backward")
                Text(verbatim: "Back")
            }.offset(x:-160, y:10)
        }
    }
}

struct searchPage_Previews: PreviewProvider {
    static var previews: some View {
        searchPage()
    }
}
