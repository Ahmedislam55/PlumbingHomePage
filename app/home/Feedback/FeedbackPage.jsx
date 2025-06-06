import FeedbackSlider from "./FeedbackSlider/FeedbackSlider";

export default function FeedbackPage() {
  return (
    <section className="xl:p-24 p-4">
      <div className="text-center" data-aos="fade">
        <span className="text-navLinks uppercase tracking-wider"> Testimonials</span>
        <h1 className="my-6 text-5xl font-bold"> Feedback from our clients </h1>
      </div>
      <FeedbackSlider />
    </section>
  );
}
