export const pages = {
  "home": `<div id="top"></div>
    <nav class="navbar-desktop">
      <div class="nav-left"><a href="#top">JESSCHONG</a></div>
      <ul class="nav-right">
        <li><a id="work-link" href="#work">WORK</a></li>
        <li>
          <a href="https://www.linkedin.com/in/jessicachonghx/" target="_blank"
            >LINKEDIN</a
          >
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1N-WhVJIsJz8Y2moicAVMIaIguSxVhiVQ/view"
            target="_blank"
            >RESUME</a
          >
        </li>
      </ul>
    </nav>

    <!-- Mobile nav -->
    <nav class="navbar fixed-top" style="display: none">
      <div class="container-fluid">
        <a class="nav-left-mobile" href="index.html">JESSCHONG</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="index.html#work">WORK</a>
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/jessicachonghx/"
              target="_blank"
              >LINKEDIN</a
            >
            <a
              class="nav-link"
              href="https://drive.google.com/file/d/1N-WhVJIsJz8Y2moicAVMIaIguSxVhiVQ/view"
              target="_blank"
              >RESUME</a
            >
          </div>
        </div>
      </div>
    </nav>

    <!-- Banner  -->
    <div class="banner">
      <div class="banner-left">
        <img id="banner-left-image" src="assets/images/banner_left_image.svg" />
        <img id="banner-left-gif" src="assets/images/flower.gif" />
      </div>
      <div class="banner-right">
        <p id="banner-right-text">
          I design B2B and B2C products across healthcare, insurance and SaaS,
          combining research, product thinking and AI-assisted development to
          turn ideas into testable experiences.
        </p>
        <div class="banner-tags" aria-label="Core skills">
          <span class="banner-tag">Product Design</span>
          <span class="banner-tag">AI Prototyping</span>
          <span class="banner-tag">UX Research</span>
          <span class="banner-tag">Design Systems</span>
        </div>
        <img id="banner-right-line" src="assets/images/banner_right_line.svg" />
      </div>
    </div>
    <!-- Projects -->
    <div class="project-container">
      <!-- work navigation bar links here -->
      <div id="work"></div>
      <h3 id="project-header-text">Freshly potted works...</h3>
      <!-- Design Revamp Project -->
      <div
        id="design-project"
        class="project"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img class="project-image" src="assets/images/main_design_revamp.png" />
        <div class="project-text-container">
          <h3 class="project-text-header">Design System Revamp</h3>
          <p class="project-text">
            The growth of the product from Dashboard to Nexus presented the
            perfect opportunity to overhaul the existing MVP-focused design
            system.
          </p>
          <div class="project-read-more">
            <p class="read-more-text">Read More</p>
            <img
              class="read-more-arrow"
              src="assets/images/read_more_arrow.svg"
            />
          </div>
        </div>
      </div>
      <!-- CapitalView Project -->
      <div id="capitalview-project" class="project">
        <img class="project-image" src="assets/images/main_capital_view2.png" />
        <div class="project-text-container">
          <h3 class="project-text-header">CapitalView</h3>
          <p class="project-text">
            Partnered with UBS, conducted interviews, with design thinking
            methodologies guiding the process. Improved turnover time for the
            UBS team when searching for accurate, cap table data for private
            companies in Singapore.
          </p>
          <div class="project-read-more">
            <p class="read-more-text">Read More</p>
            <img
              class="read-more-arrow"
              src="assets/images/read_more_arrow.svg"
            />
          </div>
        </div>
      </div>
      <!-- NHG Project -->
      <div
        id="nhg-project"
        class="project"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img class="project-image" src="assets/images/main_nhg.png" />
        <div class="project-text-container">
          <h3 class="project-text-header">NHG Cares Partners Portal</h3>
          <p class="project-text">
            Gathered feedback and requirements, designed and launched in 4
            months. The portal has onboarded 22 community partners and automate
            about 1,200 programmes across 100 sites in Central and North
            Singapore.
          </p>
          <div class="project-read-more">
            <p class="read-more-text">Read More</p>
            <img
              class="read-more-arrow"
              src="assets/images/read_more_arrow.svg"
            />
          </div>
        </div>
      </div>
      <!-- Gongcha Project -->
      <div
        id="gongcha-project"
        class="project"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img class="project-image" src="assets/images/main_gongcha.png" />
        <div class="project-text-container">
          <h3 class="project-text-header">Gongcha App Revamp</h3>
          <p class="project-text">
            First UI/UX project on re-designing the Gongcha app.
          </p>
          <div class="project-read-more">
            <p class="read-more-text">Read More</p>
            <img
              class="read-more-arrow"
              src="assets/images/read_more_arrow.svg"
            />
          </div>
        </div>
      </div>

      <h3 id="stay-tuned-text">Stay tuned for more case studies...</h3>
    </div>

    <footer>
      <img id="footer-star" src="assets/images/footer_star.svg" />
      <div class="footer-link-group">
        <p id="footer-email" class="footer-link">
          <a href="mailto:jessicachong.8@gmail.com">EMAIL</a>
        </p>
        <p id="footer-linkedin" class="footer-link">
          <a href="https://www.linkedin.com/in/jessicachonghx/" target="_blank"
            >LINKEDIN</a
          >
        </p>
        <p id="footer-resume" class="footer-link">
          <a
            href="https://drive.google.com/file/d/1OfF07lKKEiHtiftPz74Bpin6aHqu9EHo/view?usp=drive_link"
            target="_blank"
            >RESUME</a
          >
        </p>
      </div>
      <div class="footer-credit">
        <p id="design-credit">Website designed by me</p>
        <p id="coding-credit">Coded by Brian Chong</p>
      </div>
    </footer>`,
  "capitalview": `<nav class="navbar-desktop">
      <div class="nav-left"><a href="index.html">JESSCHONG</a></div>
      <ul class="nav-right">
        <li><a id="work-link" href="index.html#work">WORK</a></li>
        <li>
          <a href="https://www.linkedin.com/in/jessicachonghx/" target="_blank"
            >LINKEDIN</a
          >
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1OfF07lKKEiHtiftPz74Bpin6aHqu9EHo/view?usp=drive_link"
            target="_blank"
            >RESUME</a
          >
        </li>
      </ul>
    </nav>

    <!-- Mobile nav -->
    <nav class="navbar fixed-top" style="display: none">
      <div class="container-fluid">
        <a class="nav-left-mobile" href="index.html">JESSCHONG</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="index.html#work">WORK</a>
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/jessicachonghx/"
              target="_blank"
              >LINKEDIN</a
            >
            <a
              class="nav-link"
              href="https://drive.google.com/file/d/1OfF07lKKEiHtiftPz74Bpin6aHqu9EHo/view?usp=drive_link"
              target="_blank"
              >RESUME</a
            >
          </div>
        </div>
      </div>
    </nav>

    <div class="project-title" id="project-title-capitalview">
      <h3 class="project-title-top">CapitalView</h3>
      <h3 class="project-title-bottom">Automated Tracking of Private Equity</h3>
    </div>

    <img id="capitalview-image1" src="assets/images/capitalview_image1.png" />

    <div class="capitalview-container">
      <div class="project-overview-container">
        <div
          class="project-overview-section"
          data-aos="fade-in"
          data-aos-duration="750"
        >
          <p class="overview-title">Project</p>
          <p class="overview-description">Web Application, Desktop, Ipad</p>
        </div>
        <div
          class="project-overview-section"
          data-aos="fade-in"
          data-aos-duration="750"
          data-aos-delay="500"
        >
          <p class="overview-title">Key Activities</p>
          <p class="overview-description">
            Requirements Gathering, Data Analysis, User Research, 
            UI design, Workshop Facilitation, User Testing, Design QA
          </p>
        </div>
        <div
          class="project-overview-section"
          data-aos="fade-in"
          data-aos-duration="750"
          data-aos-delay="1000"
        >
          <p class="overview-title">Duration</p>
          <p class="overview-description">4 months</p>
        </div>
      </div>

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">About</h3>
        <p class="project-description-text">
          Accredify collaborated with UBS to create CapitalView, a solution
          addressing Private Equity (PE) specialists' challenges, such as manual
          shareholding verification and unreliable market data.
        </p>
      </div>

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Understanding the Brief</h3>
        <p class="project-description-text">
          Before starting the project, I reviewed the business proposal and
          summarised it in my FigJam file for quick reference. With the goals
          and initial problem statements in focus, I began drafting low-fidelity
          wireframes and formulating research questions to guide the process.
        </p>
        <p class="project-description-text-bold">Project Goal</p>
        <p class="project-description-text underbold">
          To develop an enterprise platform to automate equity ownership
          tracking for private companies in Singapore.
        </p>
        <p class="project-description-text-bold">Initial Problem Statements</p>
        <ol>
          <li class="underbold">
            How can buyers confirm sellers own the shares to avoid risks?
          </li>
          <li>
            How can buyers find sellers or inventory holders of private
            companies?
          </li>
          <li>
            How can buyers discover new investment opportunities linked to
            market leaders or related investors?
          </li>
        </ol>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img
          id="capitalview-image2"
          src="assets/images/capitalview_image2.svg"
        />
        <p class="image-caption">Design Brief on FigJam</p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">
          Interviewing PE Business Specialists
        </h3>
        <p class="project-description-text">
          Two PE business specialists were interviewed with the research 
          questions guiding the interviews process.
        </p>
        <p class="project-description-text-bold">Research Questions</p>
        <ol>
          <li>
            What is the current practice of identifying potential sellers and
            buyers of PE shares?
          </li>
          <li>How do they verify the potential sellers or buyers?</li>
          <li>Any issues with the current practice?</li>
          <li>Any features they’d like to see?</li>
          <li>What do they expect from the new feature?</li>
          <li>Any concerns on the new feature?</li>
        </ol>
      </div>

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Emerging Themes</h3>
        <p class="project-description-text">
          With the user interviews and affinity map done, the following themes
          were uncovered.
        </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img
          id="capitalview-image5"
          src="assets/images/capitalview_image5.svg"
        />
        <p class="image-caption">Themes Uncovered</p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Framing the Problem</h3>
        <p class="project-description-text">
          Together with my product manager and we came up with the following
          problem statements:
        </p>
        <p class="project-description-text-bold">Inaccurate Data</p>
        <p class="project-description-text underbold">
          PE specialists struggle with inaccurate or incomplete data when
          identifying buyers through third-party sources like Pitchbook. This
          leads to missed opportunities, incorrect decisions, and delays in
          closing transactions, potentially resulting in lost sales.
        </p>
        <p class="project-description-text-bold">Manual Verification</p>
        <p class="project-description-text underbold">
          PE specialists must manually purchase a biz file from ACRA to verify a
          seller's ownership, wasting time and delaying transactions.
        </p>
        <p class="project-description-text-bold">Manual Tracking of Assets</p>
        <p class="project-description-text underbold">
          PE specialists rely on manually maintained Excel sheets to track
          assets and buyers, resulting in a process prone to errors,
          inefficiency, and restricted access to a diverse buyer pool.
        </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img
          id="capitalview-image6"
          src="assets/images/capitalview_image6.svg"
        />
        <p class="image-caption">Crafting the Problem Statement on FigJam</p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Leslie, the Busy-bee Banker</h3>
        <p class="project-description-text">
          During the design process, Leslie as the user persona helped me
          empathise with user's perspective.
        </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img
          id="capitalview-image7"
          src="assets/images/capitalview_image7.svg"
        />
        <p class="image-caption">Persona and User Journey</p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">
          Organising a Brainstorm Session
        </h3>
        <p class="project-description-text">
          Moving on to the diverging phase of the the double diamond process, 
          I facilitated a brainstorming session with our team of 8, including myself, 
          the product manager, and six developers. We reframed the problem statements 
          as How Might We (HMW) questions.
        </p>
        <p>
          Following the session, we conducted a NUF (New, Useful, Feasible) test
          to assess and prioritise ideas based on their innovation,
          practicality, and feasibility. The ideas were then grouped into
          categories which allowed me to incorporate them into my designs
          easily.
        </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img
          id="capitalview_HMW_statements"
          src="assets/images/capitalview_HMW_statements.svg"
        />
        <p class="image-caption">HMWs Reframed from Problem Statements</p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img
          id="capitalview-image8"
          src="assets/images/capitalview_image8.svg"
        />
        <p class="image-caption">Brainstorming Session in Progress...</p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Designs Based on Opportunities</h3>
        </div>

        <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img
          id="capitalview_HMW_1"
          src="assets/images/capitalview_HMW_1.svg"
        />
        <p class="image-caption">Design Opportunity for HMW 1</p>
      </div>

      <div
      class="project-image-container"
      data-aos="fade-up"
      data-aos-duration="750"
    >
      <img
        id="capitalview_HMW_2"
        src="assets/images/capitalview_HMW_2.svg"
      />
      <p class="image-caption">Design Opportunity for HMW 2</p>
    </div>

    <div
    class="project-image-container"
    data-aos="fade-up"
    data-aos-duration="750"
  >
    <img
      id="capitalview_HMW_3"
      src="assets/images/capitalview_HMW_3.svg"
    />
    <p class="image-caption">Design Opportunity for HMW 3</p>
  </div>

  <div
  class="project-image-container"
  data-aos="fade-up"
  data-aos-duration="750"
>
  <img
    id="capitalview_HMW_4"
    src="assets/images/capitalview_HMW_4.svg"
  />
  <p class="image-caption">Design Opportunity for HMW 4</p>
</div>

<img class="dot-separator" src="assets/images/dot_separator.svg" />


      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Testing and Iterations</h3>
        <p class="project-description-text">
          Guided by initial ideas, I designed the UI and conducted usability
          tests across 3 sessions:
        </p>
        <p>
        <ul class="bullet-point-container">
          <li class="project-description-text bullet-point">
            1st Session → Watchlist and company screener
          </li>
          <li class="project-description-text bullet-point">
            2nd Session → Notifications and company view
          </li>
          <li class="project-description-text bullet-point">
            3rd Session → Company view, investor view and similar companies view
          </li>
        </ul>
      </p>
        <p class="project-description-text">
          Feedback highlighted users' focus on efficiency and the need to
          visualize data quickly. For CapitalView to effectively support
          research, the UI had to be simple and intuitive, minimising navigation
          steps.
        </p>
        <p>
          Throughout iterations, I kept Leslie—a key user persona—in mind,
          ensuring the design aligned with his daily workflow and needs. Below
          are some key iterations from the user interviews.
        </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img
          id="capitalview_watchlist_iterations"
          src="assets/images/capitalview_watchlist_iterations.svg"
        />
        <p class="image-caption">Watchlist Iterations</p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img
          id="capitalview_notifications_iterations"
          src="assets/images/capitalview_notifications_iterations.svg"
        />
        <p class="image-caption">Notification Iterations</p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img
          id="capitalview_shareholder_iterations"
          src="assets/images/capitalview_shareholder_updates_iterations.svg"
        />
        <p class="image-caption">Shareholder Update Iterations</p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Outcomes</h3>
        <p class="project-description-text">
          The CapitalView project successfully launched, 
          enabling UBS to quickly access and search accurate, verifiable 
          cap table data for up to 500,000 private companies in Singapore, 
          significantly enhancing efficiency and decision-making.
        </p>
        <p class="project-description-text bullet-header underbold">
          Key outcomes include:
        </p>
        <ul class="bullet-point-container">
          <li class="project-description-text bullet-point underbold">
            <p>
              Increased Efficiency: Private Equity Specialists can now sort and
              analyze company data much faster, eliminating the manual process
              of converting PDF BizFiles into Excel sheets and reducing the risk
              of human error.
            </p>
          </li>
          <li class="project-description-text bullet-point">
            <p>
              Proactive Alerts: The email notification feature ensures the team
              stays updated on new filings without needing to manually check the
              registry, saving time and effort.
            </p>
          </li>
        </ul>
      </div>

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Learnings</h3>
        <p class="project-description-text">
          Working on CapitalView has been a valuable opportunity to lead the
          entire design process, from research to final product. However, this
          comes with a set of challenges and here’s what I’ve learnt:
        </p>
        <p class="project-description-text-bold">Design Trade-offs</p>
        <p class="project-description-text underbold">
          Throughout this project, I learned to balance conflicting stakeholder
          requirements, including user needs and technical challenges. This
          meant evaluating problem worth, ROI, business priorities, and
          technical feasibility. Finding a middle ground was key to aligning
          design, functionality, and performance with project goals while
          meeting stakeholder expectations.
        </p>
        <p class="project-description-text-bold">Adaptability</p>
        <p class="project-description-text underbold">
          Ideally, interviewing at least three PE business specialists would
          have provided more robust feedback. However, given the constraints, I
          adapted by conducting user tests with colleagues, which still offered
          valuable insights for the design process
        </p>
      </div>

      <div
        class="presenting-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3
          class="project-description-title presenting-header"
          id="capitalview-header"
        >
          Presenting CapitalView
        </h3>
        <div class="presenting-capitalview-container">
          <div class="section">
            <img id="capitalview-imagetop" src="assets/images/capitalview_image13_1.svg" />
          </div>
          <div class="section">
            <img src="assets/images/capitalview_image14.svg" />
          </div>
          <div class="section">
            <div class="capitalview-video-container">
                <video
                  autoplay
                  muted
                  loop
                  playsinline
                  preload="auto"
                  onloadedmetadata="this.muted = true"
                >
                  <source
                    src="assets/videos/capitalview_video1.mp4"
                    type="video/mp4"
                  />
                  <img
                    src="assets/images/capitalview_image15_1.svg"
                    alt="CapitalView Image"
                  />
                </video>
                <img
                  src="assets/images/capitalview_image15_2.svg"
                  alt="CapitalView Image"
                />
            </div>
          </div>
          <div class="section">
            <div class="capitalview-video-container">
              <img
                src="assets/images/capitalview_image16_2.svg"
                alt="CapitalView Image"
              />
              <video
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                onloadedmetadata="this.muted = true"
              >
                <source
                  src="assets/videos/capitalview_video2.mp4"
                  type="video/mp4"
                />
                <img
                  src="assets/images/capitalview_image16_1.svg"
                  alt="CapitalView Image"
                />
              </video>
            </div>
          </div>
          <div class="section">
            <div class="capitalview-video-container">
              <video
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                onloadedmetadata="this.muted = true"
              >
                <source
                  src="assets/videos/capitalview_video3.mp4"
                  type="video/mp4"
                />
                <img
                  src="assets/images/capitalview_image17_1.svg"
                  alt="CapitalView Image"
                />
              </video>
              <img
              src="assets/images/capitalview_image17_2.svg"
              alt="CapitalView Image"
            />
            </div>
          </div>
          <div class="capitalview-image-backdrop">
            <img
            src="assets/images/capitalview_image18.svg"
            alt="CapitalView Backdrop Image"
           
            />
          </div>
        </div>
        </div>
        

        <!-- <div class="capitalview-video-container">
          <video
            id="capitalview-video1"
            class="capitalview-videos"
            src="assets/videos/capitalview_video1.mp4"
            autoplay
            loop
            muted
          ></video>
          <video
            id="capitalview-video2"
            class="capitalview-videos"
            src="assets/videos/capitalview_video2.mp4"
            autoplay
            loop
            muted
          ></video>
          <video
            id="capitalview-video3"
            class="capitalview-videos"
            src="assets/videos/capitalview_video3.mp4"
            autoplay
            loop
            muted
          ></video>
        </div> -->
      </div>
    </div>

    <footer>
      <img id="footer-star" src="assets/images/footer_star.svg" />
      <div class="footer-link-group">
        <p id="footer-email" class="footer-link">
          <a href="mailto:jessicachong.8@gmail.com">EMAIL</a>
        </p>
        <p id="footer-linkedin" class="footer-link">
          <a href="https://www.linkedin.com/in/jessicachonghx/" target="_blank"
            >LINKEDIN</a
          >
        </p>
        <p id="footer-resume" class="footer-link">
          <a
            href="https://drive.google.com/file/d/1OfF07lKKEiHtiftPz74Bpin6aHqu9EHo/view?usp=drive_link"
            target="_blank"
            >RESUME</a
          >
        </p>
      </div>
      <div class="footer-credit">
        <p id="design-credit">Website designed by me</p>
        <p id="coding-credit">Coded by Brian Chong</p>
      </div>
    </footer>`,
  "nhg": `<nav class="navbar-desktop">
      <div class="nav-left"><a href="index.html">JESSCHONG</a></div>
      <ul class="nav-right">
        <li><a id="work-link" href="index.html#work">WORK</a></li>
        <li>
          <a href="https://www.linkedin.com/in/jessicachonghx/" target="_blank"
            >LINKEDIN</a
          >
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1OfF07lKKEiHtiftPz74Bpin6aHqu9EHo/view?usp=drive_link"
            target="_blank"
            >RESUME</a
          >
        </li>
      </ul>
    </nav>

    <!-- Mobile nav -->
    <nav class="navbar fixed-top" style="display: none">
      <div class="container-fluid">
        <a class="nav-left-mobile" href="index.html">JESSCHONG</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="index.html#work">WORK</a>
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/jessicachonghx/"
              target="_blank"
              >LINKEDIN</a
            >
            <a
              class="nav-link"
              href="https://drive.google.com/file/d/1OfF07lKKEiHtiftPz74Bpin6aHqu9EHo/view?usp=drive_link"
              target="_blank"
              >RESUME</a
            >
          </div>
        </div>
      </div>
    </nav>

    <div class="project-title" id="project-title-nhg">
      <h3 class="project-title-top">NHG Cares Partners’ Portal</h3>
      <h3 class="project-title-bottom">
        one-stop digital platform for community programmes
      </h3>
    </div>

    <img id="nhg-image1" src="assets/images/nhg_image1.svg" />

    <div class="nhg-container">
      <div class="project-overview-container">
        <div
          class="project-overview-section"
          data-aos="fade-in"
          data-aos-duration="750"
        >
          <p class="overview-title">Project</p>
          <p class="overview-description">Web Application, Desktop, Mobile</p>
        </div>
        <div
          class="project-overview-section"
          data-aos="fade-in"
          data-aos-duration="750"
          data-aos-delay="500"
        >
          <p class="overview-title">Key Activities</p>
          <p class="overview-description">
            Requirements Gathering, Stakeholder Management, Desk Research, UI/UX Design, 
            Design QA, User Acceptance
            Testing
          </p>
        </div>
        <div
          class="project-overview-section"
          data-aos="fade-in"
          data-aos-duration="750"
          data-aos-delay="1000"
        >
          <p class="overview-title">Duration</p>
          <p class="overview-description">4 months</p>
        </div>
      </div>

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">About</h3>
        <p class="project-description-text">
          As part of Singapore’ s Healthier Sg initiative, 
          I contributed to the development of the Partners’ Portal, a platform 
          designed to connect residents with community care and centralise programme 
          management for NHG’s (National Healthcare Group) community partners.
        </p>
        <p class="project-description-text">
          Leveraging the Jobs-to-be-done framework, I design a solution that allows
          community partners to create programmes, track attendance and issue 
          programme certificates, as well as view analytics. The portal successfully 
          onboarded over 20 community partners, streamlining more than 400 programs 
          across approximately 100 sites in Central and North Singapore.

        </p>

      </div>

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Understanding User's Goals</h3>
        <p class="project-description-text">
        To understand the requirements, we held meetings with NHG users to explore
         their structure, needs, and challenges. Using FigJam, we mapped out user 
         flows based on these insights. Iterations were done with NHG before diving into designs.
          </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nhg-image3" src="assets/images/nhg_image3.svg" />
        <p class="image-caption">User Flows Presented in Stakeholder Meetings</p>
      </div>

      <div
      class="project-description-container"
      data-aos="fade-up"
      data-aos-duration="750"
    >
      <p class="project-description-text">
        The partners’ portal centers around 2 groups of users: NHG Users and Community 
        Partners. As the bulk of the design centred on Community Partners, 
        this case study will <b class=project-description-text-bold>mainly focus on the community partners.</b>

        <p>Since interviewing users is not possible, we leveraged on the Jobs-to-Be-Done (JTBD) framework.
           JTBD helped me to understand the specific goals of the users , which enable me to design solutions
          to help them achieve those goals.
        </p>
    </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nhg-image2" src="assets/images/nhg_users_challenges.svg" />
        <p class="image-caption">Users and their challenges</p>
      </div>


      <div
      class="project-image-container"
      data-aos="fade-up"
      data-aos-duration="750"
    >
      <img id="nhg-image4" src="assets/images/nhg_JTBD.svg" />
      <p class="image-caption">Community Partners JTBD</p>
    </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Getting things off the ground</h3>
        <p class="project-description-text">
          <p class="project-description-text bullet-header underbold">
            To gather design inspiration, we explored apps in the fitness industry (ClassPass, TeamUp) 
            as well as data analytics tools (PowerBI, Tableau). Keeping in mind the Jobs to be done
            (JTBD), we focused on feature comparison and user navigation.         
          </p>
          <p>
            <p>It was a fruitful exercise as we were able to gather the following:</p>
          <ul class="bullet-point-container">
            <li class="project-description-text bullet-point underbold">
                How programmes and sessions can be structured intuitively 
            </li>
            <li class="project-description-text bullet-point">
                How attendance can be marked and tracked easily
            </li>
            <li class="project-description-text bullet-point">
                How dashboards can be presented and useful data
            </li>
          </ul>
          </p>
        </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nhg-image4" src="assets/images/nhg_feature_comparison.svg" />
        <p class="image-caption">Feature Comparison for Adding a Class</p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Back to the Community Partners</h3>
        <p class="project-description-text">
          After mapping out user flows and gathering design inspiration, we looked back
           at the Community Partner’s JTBD and began designing high fidelity prototypes. 
        </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nhg-image6" src="assets/images/nhg_JTBD1_screens.svg" />
        <p class="image-caption">Screens that fulfill job</p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nhg-image7" src="assets/images/nhg_JTBD2_screens.svg" />
        <p class="image-caption">Screens that fulfill job</p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">UAT and Launch</h3>
        <p class="project-description-text">
          Once the product was developed, we conducted User Acceptance Testing
          (UAT) based on a detailed UAT brief outlining various scenarios. The
          testing group included NHG users and community partners from the Tsao
          Foundation and AWWA (Asian Women’s Welfare Association).
        </p>
        <p class="project-description-text">
          During the testing, I worked closely with users, guiding them through
          the test cases to ensure a smooth process. All bugs, issues, and
          feedback were documented and shared with the team for prioritisation
          and delegation.
        </p>

        <p class="project-description-text">
          Following multiple UAT sessions and iterative fixes, the application
          successfully launched in April 2024. It onboarded over 20 community
          partners, streamlining more than 400 programs across approximately 100
          sites in Central and North Singapore. The launch was also highlighted
          on GovInsider, showcasing its impact on integrating health and social
          ecosystems (<a
            href="https://govinsider.asia/intl-en/article/nhgs-cares-partners-portal-aims-to-integrate-health-and-social-ecosystem"
            target="_blank"
            >Read more</a
          >).
        </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nhg-image8" src="assets/images/nhg_image8.svg" />
        <p class="image-caption">
          NHG Cares Partners’ Portal featured on GovInsider
        </p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Learnings</h3>
        <p class="project-description-text">
          Working on this project gave me invaluable experience collaborating
          with external stakeholders—a process that was both challenging and
          rewarding.
        </p>
        <p class="project-description-text">
        <b>Lead with a Yes</b>
        <p>One practice I embraced was leading with a "Yes"—acknowledging stakeholder input
          positively by saying, “Yes, that’s a good point.” or “Yes, I understand where you
          are coming from.” This approach doesn’t imply immediate commitment but conveys
          that their contributions are valued. It fosters collaboration, reinforcing that we’re
          all on the same team working toward the same goals. 
        </p>
        </p>
        <p class="project-description-text">
          <b>Adaptability</b>
          <p>I also learnt the importance of adaptability. When user testing wasn’t feasible, 
            I sought alternative ways to design effectively. This included focusing on understanding
             the goals and priorities of target users through creating user flows and constantly
              reflecting on how community partners would use the application in real-world scenarios.
            </p>
        </p>
      </div>

      <div
        class="presenting-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3
          class="project-description-title presenting-header"
          id="partners-portal-header"
        >
          Presenting Partners’ Portal
        </h3>
        <img
          id="nhg-image9"
          class="presenting-img"
          src="assets/images/nhg_image9.svg"
        />
      </div>
    </div>

    <footer>
      <img id="footer-star" src="assets/images/footer_star.svg" />
      <div class="footer-link-group">
        <p id="footer-email" class="footer-link">
          <a href="mailto:jessicachong.8@gmail.com">EMAIL</a>
        </p>
        <p id="footer-linkedin" class="footer-link">
          <a href="https://www.linkedin.com/in/jessicachonghx/" target="_blank"
            >LINKEDIN</a
          >
        </p>
        <p id="footer-resume" class="footer-link">
          <a
            href="https://drive.google.com/file/d/1OfF07lKKEiHtiftPz74Bpin6aHqu9EHo/view?usp=drive_link"
            target="_blank"
            >RESUME</a
          >
        </p>
      </div>
      <div class="footer-credit">
        <p id="design-credit">Website designed by me</p>
        <p id="coding-credit">Coded by Brian Chong</p>
      </div>
    </footer>`,
  "nexus": `<nav class="navbar-desktop">
      <div class="nav-left"><a href="index.html">JESSCHONG</a></div>
      <ul class="nav-right">
        <li><a id="work-link" href="index.html#work">WORK</a></li>
        <li>
          <a href="https://www.linkedin.com/in/jessicachonghx/" target="_blank"
            >LINKEDIN</a
          >
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1OfF07lKKEiHtiftPz74Bpin6aHqu9EHo/view?usp=drive_link"
            target="_blank"
            >RESUME</a
          >
        </li>
      </ul>
    </nav>

    <!-- Mobile nav -->
    <nav class="navbar fixed-top" style="display: none">
      <div class="container-fluid">
        <a class="nav-left-mobile" href="index.html">JESSCHONG</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="index.html#work">WORK</a>
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/jessicachonghx/"
              target="_blank"
              >LINKEDIN</a
            >
            <a
              class="nav-link"
              href="https://drive.google.com/file/d/1OfF07lKKEiHtiftPz74Bpin6aHqu9EHo/view?usp=drive_link"
              target="_blank"
              >RESUME</a
            >
          </div>
        </div>
      </div>
    </nav>

    <div class="project-title" id="project-title-capitalview">
      <h3 class="project-title-top">Accredify Nexus</h3>
      <h3 class="project-title-bottom">Building Design System V2.0</h3>
    </div>

    <img id="nexus-image1" src="assets/images/nexus_image1.png" />

    <div class="nexus-container">
      <div class="project-overview-container">
        <div
          class="project-overview-section"
          data-aos="fade-in"
          data-aos-duration="750"
        >
          <p class="overview-title">Project</p>
          <p class="overview-description">Design System</p>
        </div>
        <div
          class="project-overview-section"
          data-aos="fade-in"
          data-aos-duration="750"
          data-aos-delay="500"
        >
          <p class="overview-title">Key Activities</p>
          <p class="overview-description">
            Requirements Gathering, Desk Research, UIUX Design, Design QA
          </p>
        </div>
        <div
          class="project-overview-section"
          data-aos="fade-in"
          data-aos-duration="750"
          data-aos-delay="1000"
        >
          <p class="overview-title">Duration</p>
          <p class="overview-description">3 months</p>
        </div>
      </div>

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">From Dashboard to Nexus</h3>
        <p class="project-description-text">
          I joined Accredify at a time of expansion - where the company grew
          from 20 to 40 employees and our design system hasn’t changed much.
          With 3 designers at a 40-person company, we knew it was time to
          improve our app’s experience with a great design system.
        </p>
        <p class="project-description-text">
          The growth of the product from Dashboard to Nexus presented the
          perfect opportunity to overhaul the existing MVP-focused design
          system. As Nexus is still being developed, I’d like to spotlight one
          crucial aspect - Building design system V2.0.
        </p>
      </div>

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Design System Audit</h3>
        <p class="project-description-text">
          Before diving into the improvements, we needed to know what we were
          working with. In a team consisting of 2 designers and 2 developers, we
          conducted a review of our existing design system, examining each
          component. We documented inconsistencies and identified opportunities
          for improvement.
        </p>
        <p class="project-description-text">
          Involving developers early in the process allowed them to offer
          valuable insights on systematically implementing the design system.
          This proved beneficial later when they introduced a new workflow to
          improve the design QA process.
        </p>
        <p class="project-description-text-bold">Key Findings:</p>
        <ul class="bullet-point-container">
          <li class="project-description-text bullet-point">
            Limited consideration for accessibility
          </li>
          <li class="project-description-text bullet-point">
            Insufficient documentation for smooth handovers
          </li>
          <li class="project-description-text bullet-point">
            Lack of mobile responsiveness in the design system
          </li>
          <li class="project-description-text bullet-point">
            Missing components to support the new application
          </li>
        </ul>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nexus-image2" src="assets/images/nexus_image2.svg" />
        <p class="image-caption">
          Conducting the audit on existing design system
        </p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Planning out V2.0</h3>
        <p class="project-description-text">
          Using the insights from our audit, we began planning v2.0—a revamped
          design system featuring a comprehensive style guide and a components
          library. This iteration includes a curated selection of components,
          including newly introduced elements (listed as “New” below) and
          enhanced versions of existing ones.
        </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nexus-image3" src="assets/images/nexus_image3.svg" />
        <p class="image-caption">Design System V2.0 feature list</p>
      </div>

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">On Components and Variants</h3>
        <p class="project-description-text">
          Design systems is something I have yet to explore. To prepare myself,
          I brushed up my knowledge and skills on components through youtube
          videos. I also referenced popular design systems like Ant Design,
          Carbon Design, Materials Design to get a sense of how the designs are
          structured.
        </p>
      </div>

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">
          Atomic Design and Semantic Naming
        </h3>
        <p class="project-description-text">
          The Design system was built with reference to the Atomic Design
          Methodology, coined by Brad Frost, starting with atoms like buttons
          and icons to molecules like modal and navigation bars.
        </p>
        <p class="project-description-text">
          Naming, albeit a painful process, proved to be a very important step
          later on when we are using the design system. Semantic naming was
          practiced to make sure the components are named systematically for
          easy identification as seen below.
        </p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nexus-image4" src="assets/images/nexus_image4.svg" />
        <p class="image-caption">
          Naming convention which allowed for easy switching between variants
        </p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Move Towards Accessibility</h3>
        <p class="project-description-text">
          In order to make our product easier to navigate and improve user
          satisfaction, we took a few steps to make our application more
          accessible.
        </p>
        <p class="project-description-text bullet-header">
          Measures taken include:
        </p>
        <ul class="bullet-point-container">
          <li class="project-description-text bullet-point underbold">
            Adding focus state to components like buttons and input fields
          </li>
          <li class="project-description-text bullet-point">
            <p>Make sure colours and backgrounds meet WCAG (Web Content
            Accessibility Guidelines) with an AA compliant ratio of 4.5:1
          </p>
          </li>
        </ul>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nexus-image5" src="assets/images/nexus_image5.svg" />
        <p class="image-caption">Default and their focus variants</p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nexus-image6" src="assets/images/nexus_image6.svg" />
        <p class="image-caption">
          Colour contrast checker tool was used to check contrast ratio
        </p>
      </div>

      <div data-aos="fade-up" data-aos-duration="750">
        <div class="project-description-container">
          <h3 class="project-description-title">
            Documentation for Easy Handovers
          </h3>
          <p class="project-description-text">
            Guidelines were included to allow users of the design system to
            visualise and understand the behaviour of the components.
          </p>
        </div>

        <img id="nexus-image7" src="assets/images/nexus_image7.svg" />
        <p class="image-caption">Documentation for Select component</p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Design QA on Chromatic</h3>
        <p class="project-description-text">
          We used Chromatic and Storybook to identify visual and functional
          bugs, ensuring alignment across the team on the latest UI
          implementation. At this stage, there was significant collaboration
          between myself and the developers to ensure the components matched the
          intended design and behaviour.
        </p>
        <p class="project-description-text-bold bullet-header">Process:</p>
        <ol>
          <li class="underbold">Developer completes the UI implementation</li>
          <li>Developer notifies the designer</li>
          <li>Designer reviews the UI</li>
          <li>
            Designer approves or rejects the component, providing comments when
            necessary
          </li>
        </ol>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nexus-image8" src="assets/images/nexus_image8.svg" />
        <p class="image-caption">Checking padding and space on Storybook</p>
      </div>

      <div
        class="project-image-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <img id="nexus-image9" src="assets/images/nexus_image9.svg" />
        <p class="image-caption">
          Inputing comments before denying or accepting a build
        </p>
      </div>

      <img class="dot-separator" src="assets/images/dot_separator.svg" />

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Outcomes</h3>
        <p class="project-description-text">
          Design System 2.0 has delivered significant impact across the company:
          <ul class="bullet-point-container">
            <li class="project-description-text bullet-point bolded-bullets">
            Served as the foundation for our new product, Nexus
            </li>
            <li class="project-description-text bullet-point bolded-bullets">
              Streamlined design workflows for designers
            </li>
            <li class="project-description-text bullet-point bolded-bullets">
              Enhanced collaboration with developers during design QA for Nexus
            </li>
            <li class="project-description-text bullet-point bolded-bullets">
              Provided a cohesive system for the marketing team’s proposal decks
            </li>
        </ul>
      </div> 

      <div
        class="project-description-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3 class="project-description-title">Learnings</h3>
        <p class="project-description-text">
          Working on the design system taught me that, like a growing flower, it
          needs continuous care and adaptation. I realised the importance of:

          <ul class="bullet-point-container">
            <li class="project-description-text bullet-point bolded-bullets">
              <span class="bold">Clear Design Direction:</span> To guide and align
              the team.
            </li>
            <li class="project-description-text bullet-point bolded-bullets">
              <span class="bold">Unified Documentation:</span> Thoughtful guidelines for 
              components to improve usability and consistency.
            <li class="project-description-text bullet-point bolded-bullets">
              <span class="bold">Accountability:</span> Someone dedicated to
              managing the design system and its documentation.
            </li>
            <li class="project-description-text bullet-point bolded-bullets">
              <span class="bold">Refined Processes:</span> Better workflows for
              design discovery, feedback, and component updates.
            </li>
            
        </ul>
        <p class="project-description-text">
          This is just the beginning; as we integrate Design System 2.0 into Nexus and gather feedback,
          the system will continue to grow.
        </p>
      </div> 
        
         

      <div
        class="presenting-container"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <h3
          class="project-description-title presenting-header"
          id="nexus-header"
        >
          Presenting Design System 2.0
        </h3>
        <img
          id="nexus-image10"
          class="presenting-img"
          src="assets/images/nexus_image10.svg"
        />
      </div>
    </div>

    <footer>
      <img id="footer-star" src="assets/images/footer_star.svg" />
      <div class="footer-link-group">
        <p id="footer-email" class="footer-link">
          <a href="mailto:jessicachong.8@gmail.com">EMAIL</a>
        </p>
        <p id="footer-linkedin" class="footer-link">
          <a href="https://www.linkedin.com/in/jessicachonghx/" target="_blank"
            >LINKEDIN</a
          >
        </p>
        <p id="footer-resume" class="footer-link">
          <a
            href="https://drive.google.com/file/d/1OfF07lKKEiHtiftPz74Bpin6aHqu9EHo/view?usp=drive_link"
            target="_blank"
            >RESUME</a
          >
        </p>
      </div>
      <div class="footer-credit">
        <p id="design-credit">Website designed by me</p>
        <p id="coding-credit">Coded by Brian Chong</p>
      </div>
    </footer>`
};
