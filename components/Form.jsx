
import Link from "next/link";

const Form = ({ type, lesson, setLesson, submitting, handleSubmit }) => {

  return (
    <section className='w-full max-w-full flex-center flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} lekcję lub kurs</span>
      </h1>
      <p className='desc text-left max-w-md'>
        Opisz dokładnie czego możesz nauczyć <br/> a także czego chciałbyś się nauczyć
      </p>

      <form
        onSubmit={handleSubmit}
        className='form_layout'
      >
        <label>
          <span className='form_label'>
            Dodaj tytuł
          </span>
          <input
            value={lesson.title}
            onChange={(e) => setLesson({ ...lesson, title: e.target.value })}
            type='text'
            placeholder='Tytuł'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='form_label'>
            Twoja oferta
          </span>

          <textarea
            value={lesson.offer}
            onChange={(e) => setLesson({ ...lesson, offer: e.target.value })}
            placeholder='Dodaj opis tutaj'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='form_label'>
            Twoje oczekiwania , co w zamian
          </span>

          <textarea
            value={lesson.instead}
            onChange={(e) => setLesson({ ...lesson, instead: e.target.value })}
            placeholder='Dodaj opis tutaj'
            required
            className='form_textarea '
          />
        </label>



        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Dodaj tag{" "}
            <span className='font-normal'>
              (#programowanie, #korepetycje, #muzyka, itp.)
            </span>
          </span>
          <input
            value={lesson.tag}
            onChange={(e) => setLesson({ ...lesson, tag: e.target.value })}
            type='text'
            placeholder='#hashtag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Rezygnuj
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;