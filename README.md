# 🦠 Fake Virus Alert Image Generator

A browser‑based tool that lets you create customizable, fictional virus alert notifications and download them as images — perfect for satire, memes, or harmless pranks.

> **⚠️ This is an image generator, not real malware.** It does **not** scan your system, access your files, play sounds, open pop‑ups, or cause any harm. It simply renders a static image based on the text you enter. Use responsibly.

## 🚀 Live Demo

Check out the live demo: [https://www.sieu.io.vn/j4f/fake-virus-alert](https://www.sieu.io.vn/j4f/fake-virus-alert)

## ✨ Features

- **Customizable Alert Fields** – Edit every part of the fake notification:
  - **Tên File** (File Name) – the name of the "infected" file
  - **Chữ Logo** (Logo Text) – up to 4 characters for the antivirus brand
  - **Năm** (Year) – the year to display
  - **Phiên bản** (Version) – the version label
  - **Tiêu đề cảnh báo** (Alert Title) – the main warning headline
  - **Nội dung chi tiết** (Message Body) – the detailed message
- **Live Preview** – The fake alert updates in real time as you type
- **Logo Safety Filter** – Built‑in blocklist of real antivirus brand names (BKAV, AVG, ESET, Kaspersky, Norton, McAfee, etc.). If you enter a banned name, it is automatically replaced with **`FAKE`** and a warning is shown, preventing impersonation of real security software
- **One‑Click Image Download** – Export the fake alert as an image file
- **Built‑in Disclaimer** – Every generated image includes a footer stating that the software name is fictional and has no legal standing, and that the user is responsible for how the image is used
- **Dark Theme** – Modern, eye‑friendly interface
- **Fully Responsive** – Works on desktop, tablet, and mobile devices
- **No Installation Required** – Runs entirely in the browser

## 🛠️ Technologies Used

- **HTML5** – Structure of the form and preview area
- **CSS3** – Styling, dark theme, and responsive layout
- **JavaScript (Vanilla)** – Live preview updates, logo filtering, and image export
- **html2canvas** (or similar library) – Client‑side rendering of the preview to a downloadable image
- **No frameworks, no JSON, no backend** – Fully static and client‑side

## 📁 Project Structure

```
fake-virus-alert/
├── index.html      # Main HTML file with the prank interface
├── style.css       # Stylesheet with animations and alarming theme
├── script.js       # Prank logic (scan simulation, pop‑ups, sounds)
└── README.md       # Project documentation
```

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/lemasieu/fake-virus-alert.git
   ```
2. **Navigate to the project folder**   
   ```bash
   cd fake-virus-alert
   ```
3. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local development server (e.g., Live Server in VS Code)

## 📝 How It Works

1. **Configure the fake alert** – Use the input fields on the page to customize the fake virus notification:
   - **Tên File (File Name)** – The name of the "infected" file (e.g., `explorer.exe`)
   - **Chữ Logo (Logo Text)** – A short text (up to 4 characters) to display as the antivirus brand logo
   - **Năm (Year)** – The year to display (e.g., `2006`)
   - **Phiên bản (Version)** – The version label (e.g., `Fakefessional`)
   - **Tiêu đề cảnh báo (Alert Title)** – The main warning headline
   - **Nội dung chi tiết (Message Body)** – The detailed message shown in the alert

2. **See the live preview** – As you type, the fake alert preview updates in real time.

3. **Logo safety filter** – The tool includes a built-in blocklist of real antivirus brand names (e.g., BKAV, AVG, ESET, Kaspersky, Norton, McAfee). If you enter a banned name, it is automatically replaced with **`FAKE`** and a warning message appears. This prevents the tool from being used to impersonate real security software.

4. **Download the image** – Click the **"Tải ảnh về"** (Download Image) button to export the fake alert as an image file.

5. **Disclaimer included** – Every generated image includes a footer stating that the software name is fictional and has no legal standing, and that the user is responsible for how the image is used.

**Important:** This tool does **not** simulate a real virus scan, does **not** play sounds, does **not** open pop-up windows, and does **not** interact with your system in any way. It simply generates a static image based on your input.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is open-source and available under the MIT License.
