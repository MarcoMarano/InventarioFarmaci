import SwiftUI
import Foundation

extension UINavigationController {
    override open func viewDidLoad() {
        super.viewDidLoad()

    let standard = UINavigationBarAppearance()
        standard.backgroundColor = UIColor(.white)
    let compact = UINavigationBarAppearance()
        compact.backgroundColor = UIColor(.white)

    let scrollEdge = UINavigationBarAppearance()
        scrollEdge.backgroundColor = UIColor(.white)

    navigationBar.standardAppearance = standard
    navigationBar.compactAppearance = compact
    navigationBar.scrollEdgeAppearance = scrollEdge
 }
}
