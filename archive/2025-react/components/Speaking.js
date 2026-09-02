function Speaking() {
  try {
    const speakingEvents = [
      {
        title: "A deep dive into RxJS subjects",
        event: "ReactiveX Bangkok Meetup First",
        location: "Hangar Coworking Space, Thailand",
        date: "29 August 2019"
      },
      {
        title: "Subjecting State to Good Behavior",
        event: "ANGULAR MEETUP JULY 2019",
        location: "7 Peaks Software, Bangkok, Thailand",
        date: "30 July 2019"
      },
      {
        title: "My Experience of TDD in Real Life",
        event: "Women Techmakers powered by GDG Sriracha",
        location: "Sriracha, Chonburi, Thailand",
        date: "26 March 2016"
      }
    ];

    const teachingExperience = [
      {
        course: "Automated Test using Robot Framework",
        institution: "Chaiyaphum Rajabhat University",
        location: "Thailand",
        date: "4 - 5 Aug 2018"
      },
      {
        course: "Basic Angular CRUD operation using Firebase API",
        institution: "Naresuan University",
        location: "Thailand",
        date: "27-28 Jan 2018"
      },
      {
        course: "Basic AngularJS, Automated Test Using Robot Framework",
        institution: "Maejo University",
        location: "Chiang Mai, Thailand",
        date: "Jan-Feb 2017"
      },
      {
        course: "TDD (Test Driven Development)",
        institution: "Mahanakorn University of Technology",
        location: "Thailand",
        date: "13 May 2017"
      }
    ];

    return (
      <section data-name="speaking" data-file="components/Speaking.js" className="py-12 section-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Speaking & Teaching</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-6">Speaking Engagements</h3>
                <div className="space-y-4">
                  {speakingEvents.map((event, index) => (
                    <div key={index} className="portfolio-card">
                      <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                      <p className="text-purple-300 text-sm mb-1">{event.event}</p>
                      <p className="text-gray-400 text-xs">{event.location} | {event.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-6">Teaching Experience</h3>
                <div className="space-y-4">
                  {teachingExperience.map((teaching, index) => (
                    <div key={index} className="portfolio-card">
                      <h4 className="text-lg font-semibold text-white mb-2">{teaching.course}</h4>
                      <p className="text-purple-300 text-sm mb-1">{teaching.institution}</p>
                      <p className="text-gray-400 text-xs">{teaching.location} | {teaching.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Speaking component error:', error);
    reportError(error);
  }
}
