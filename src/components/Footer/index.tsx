import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-header">
          Questions? Call
          <span> 0800 591 8943</span>
        </div>
        <div className="footer-columns-container">
          <table className="footer-table">
            <thead>
              <tr>
                <th>FAQ</th>
                <th>Help Center</th>
                <th>Account</th>
                <th>Media Center</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Investor Relations</td>
                <td>Jobs</td>
                <td>Redeem Gift Cards</td>
                <td>Buy Gift Cards</td>
              </tr>
              <tr>
                <td>Ways to Watch</td>
                <td>Terms of Use</td>
                <td>Privacy</td>
                <td>Cookie Preferences</td>
              </tr>
              <tr>
                <td>Corporate Information</td>
                <td>Contact Us</td>
                <td>Speed Test</td>
                <td>Legal Notices</td>
              </tr>
              <tr>
                <td>Only on Netflix</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
}
