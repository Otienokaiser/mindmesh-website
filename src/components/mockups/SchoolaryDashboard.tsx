import styles from "./SchoolaryDashboard.module.css";

const menu = ["Overview", "Students", "Academics", "Attendance", "Fees", "Staff", "Messages"];
const bars = [62, 78, 70, 88, 74, 92, 81];
const rows = [
  { t: "Term 2 fee statements generated", m: "Fees" },
  { t: "Form 3 attendance submitted", m: "Attendance" },
  { t: "Parent notice sent to all classes", m: "Messages" },
];

export function SchoolaryDashboard({ caption = true }: { caption?: boolean }) {
  return (
    <figure className={styles.figure}>
      <div
        className={styles.frame}
        role="img"
        aria-label="Illustration of the Schoolary dashboard showing attendance, fees and recent school activity"
      >
        <div className={styles.chrome} aria-hidden="true">
          <i /><i /><i />
          <span>schoolary</span>
        </div>
        <div className={styles.body} aria-hidden="true">
          <aside className={styles.side}>
            <strong>Schoolary</strong>
            <ul>
              {menu.map((m, i) => (
                <li key={m} className={i === 0 ? styles.active : undefined}>{m}</li>
              ))}
            </ul>
          </aside>
          <div className={styles.main}>
            <div className={styles.top}>
              <div>
                <b>Overview</b>
                <span>Term 2</span>
              </div>
              <span className={styles.pill}>Sample data</span>
            </div>
            <div className={styles.stats}>
              <div><span>Students</span><b>1,240</b></div>
              <div><span>Attendance today</span><b>94%</b></div>
              <div><span>Fees collected</span><b>78%</b></div>
            </div>
            <div className={styles.panels}>
              <div className={styles.panel}>
                <span>Weekly attendance</span>
                <div className={styles.bars}>
                  {bars.map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
                </div>
              </div>
              <div className={styles.panel}>
                <span>Recent activity</span>
                <ul className={styles.feed}>
                  {rows.map((r) => (
                    <li key={r.t}><em>{r.m}</em>{r.t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {caption && <figcaption className={styles.cap}>Interface preview with sample data</figcaption>}
    </figure>
  );
}
