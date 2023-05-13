import SwiftUI

struct DrugView: View {
    var drugItem:Drug
    var body: some View{
        VStack(spacing: 10){
            HStack(spacing: 10){
                Text(drugItem.name)
                    .font(.system(size: 22))
                Spacer()
                Text(drugItem.expirationDate)
                    .font(.system(size: 22))
                Button(action:{
                    print("delete action")
                }){
                    Image(systemName: "minus.circle.fill")
                        .resizable()
                        .foregroundColor(.red)
                        .frame(width: 20, height: 20)
                        .opacity(_editPage ? 1:0)
                }
                .buttonStyle(BorderlessButtonStyle())
            }
            .foregroundColor(.white)
            .frame(height:70)
            .padding(0)
        }
    }
}

