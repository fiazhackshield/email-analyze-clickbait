/* Steps, commands, checklists, and troubleshooting for the GUI app */
window.LAB_DATA = [
  {
    id: "intro",
    section: "Introduction",
    title: "Introduction to Email-Based Attack Analysis with ClickBait",
    intro: "This project demonstrates how to analyze email-based attacks such as phishing and malware. It includes setting up a sandbox environment, downloading malware samples, creating phishing emails, and using analysis tools to evaluate IP addresses and domains.",
    image: "assets/cover.png",
    caption: "Email Attack Analysis with ClickBait",
    checklist: [
      "Set up the sandbox environment using VirtualBox.",
      "Download and analyze malware from GitHub repositories.",
      "Create and analyze phishing emails to understand attack strategies.",
      "Use analysis tools for IP and domain lookup to validate email authenticity."
    ],
    commands: [],
    notes: [
      "This project simulates real-world phishing campaigns and malware analysis.",
      "It builds a threat-aware mindset and enhances practical skills for handling email-based cyber threats."
    ],
    issues: []
  },
  {
    id: "reqs-system",
    section: "Project Requisites",
    title: "System Requirements",
    intro: "This lab requires a physical machine with at least 8 GB of RAM and 100 GB of storage to run the sandbox environment and malware analysis tools effectively.",
    image: "assets/reqs-system.png",
    caption: "System Requirements for Email-Based Attack Analysis",
    checklist: [
      "Physical host with at least 8 GB of RAM.",
      "At least 100 GB of storage for malware analysis and sandbox environment."
    ],
    commands: [],
    notes: [
      "Ensure stable hardware for smooth performance during malware execution and email analysis."
    ],
    issues: []
  },
  {
    id: "reqs-software",
    section: "Project Requisites",
    title: "Software Requirements",
    intro: "The lab uses VirtualBox for VM creation and Windows 10 as the operating system for running the sandbox. The project also requires tools like Wireshark, VirusTotal, and WHOIS lookups for network analysis and malware identification.",
    image: "assets/reqs-software.png",
    caption: "Software Requirements for Analyzing Email-Based Attacks",
    checklist: [
      "Install VirtualBox for VM setup.",
      "Windows 10 installed on the VM.",
      "Install analysis tools like Wireshark, VirusTotal, and WHOIS lookup."
    ],
    commands: [],
    notes: [
      "The sandbox environment allows safe execution of suspicious files and malware.",
      "Ensure all tools are installed and properly configured before beginning analysis."
    ],
    issues: []
  },
  {
    id: "method",
    section: "Methodology",
    title: "Methodology for Analyzing Email-Based Attacks",
    intro: "The methodology consists of three main phases: Setup, Attack Simulation, and Analysis. This approach simulates how a security analyst would handle email-based attacks.",
    image: "assets/methodology.png",
    caption: "Phases of Email-Based Attack Analysis",
    checklist: [
      "Set up the environment with necessary software and virtual machines.",
      "Simulate phishing and malware attacks through email.",
      "Analyze email headers, IP addresses, and malware behavior to understand attack vectors."
    ],
    commands: [],
    notes: [
      "A phased approach ensures systematic handling and comprehensive understanding of email-based attacks."
    ],
    issues: []
  },
  {
    id: "env",
    section: "Setup",
    title: "Setting Up the Sandbox Environment",
    intro: "The sandbox environment is created using VirtualBox, with VMs configured in 'Bridged' networking mode to interact safely with external networks while isolating the systems from your main machine.",
    image: "assets/step-1.png",
    caption: "VM Setup for Analyzing Phishing and Malware",
    checklist: [
      "Download and install VirtualBox.",
      "Create VMs for Windows 10 and Ubuntu.",
      "Set VMs to 'Bridged' networking mode for external connectivity."
    ],
    commands: [
      { title: "Check IP and connectivity (Linux)", code: "ip a | grep inet\nping -c 3 <metasploitable_ip>\nping -c 3 <windows_ip>" },
      { title: "Check IP (Windows PowerShell)", code: "Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.IPAddress -notlike \"169.*\"}" }
    ],
    notes: [
      "Bridged mode allows each VM to communicate independently, essential for network-based malware analysis."
    ],
    issues: [
      {
        title: "VMs cannot communicate",
        severity: "Network",
        body: [
          "If VMs cannot communicate, ensure the network adapter settings are correct."
        ],
        fixes: [
          { label: "Switch to Bridged Networking", code: "In VirtualBox, switch the network adapter to 'Bridged' and recheck IP addresses." }
        ]
      }
    ]
  },
  {
    id: "install",
    section: "Setup",
    title: "Installing Malware Analysis Tools",
    intro: "Tools like VirusTotal and network sniffers like Wireshark are essential for analyzing phishing emails and malware samples. This section walks through the installation and configuration of these tools.",
    image: "assets/step-2.png",
    caption: "Installing Analysis Tools for Malware and Phishing",
    checklist: [
      "Install VirusTotal and Wireshark for analyzing files and network traffic.",
      "Ensure necessary configurations are made for proper tool functionality."
    ],
    commands: [
      { title: "Install curl (if missing)", code: "sudo apt install curl" },
      { title: "Install Wireshark", code: "sudo apt install wireshark" }
    ],
    notes: [
      "Wireshark is important for monitoring the network traffic during phishing attacks and malware execution."
    ],
    issues: [
      {
        title: "Missing curl",
        severity: "Install",
        body: [
          "curl is required to download certain files, such as malware samples."
        ],
        fixes: [
          { label: "Install curl", code: "sudo apt install curl" }
        ]
      }
    ]
  },
  {
    id: "phishing",
    section: "Attack Simulation",
    title: "Sending Phishing Emails",
    intro: "Phishing emails are created with disguised malicious payloads. The simulation includes crafting convincing phishing messages and embedding malware in attachments.",
    image: "assets/step-3.png",
    caption: "Sending Malicious Phishing Email",
    checklist: [
      "Craft a phishing email using a legitimate subject line and fake content.",
      "Attach a disguised malware file to the email.",
      "Ensure the email mimics a legitimate service to increase its effectiveness."
    ],
    commands: [],
    notes: [
      "Phishing emails exploit human trust, making them one of the most successful attack methods."
    ],
    issues: []
  },
  {
    id: "malware-analysis",
    section: "Analysis",
    title: "Analyzing Malware Behavior",
    intro: "Once the phishing email is executed, the malware is analyzed using VirusTotal and network sniffing tools to understand its behavior and impact.",
    image: "assets/step-4.png",
    caption: "Analyzing Malware Using VirusTotal",
    checklist: [
      "Upload malware samples to VirusTotal for initial analysis.",
      "Use Wireshark to observe network traffic generated by the malware.",
      "Identify patterns of malicious activity like data exfiltration or command and control connections."
    ],
    commands: [],
    notes: [
      "Tools like VirusTotal provide detailed insights into the malware, helping identify its characteristics."
    ],
    issues: []
  },
  {
    id: "reporting",
    section: "Reporting",
    title: "Generating Remediation Recommendations",
    intro: "After completing the analysis, reports are generated summarizing the findings and suggesting remedial actions for addressing the vulnerabilities.",
    image: "assets/step-5-remediation.png",
    caption: "Reporting and Recommendations",
    checklist: [
      "Generate a report summarizing attack findings and vulnerabilities.",
      "Provide recommendations for remediation and mitigation."
    ],
    commands: [],
    notes: [
      "The report includes a comprehensive breakdown of the attack vector, malware behavior, and network impact."
    ],
    issues: []
  },
  {
    id: "conclusion",
    section: "Conclusion",
    title: "Conclusion and Learnings",
    intro: "Operation ClickBait has provided valuable insights into email-based attacks, from phishing simulations to malware analysis. The lab has enhanced practical skills for identifying and mitigating such threats.",
    checklist: [
      "Successfully analyzed phishing attacks and malware samples.",
      "Generated remediation strategies to protect against similar attacks in the future."
    ],
    commands: [],
    notes: [
      "This project reinforces the importance of email security and proactive threat detection."
    ],
    issues: []
  }
];
