import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function IncrementDecrement() {

    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Increment Decrement</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    
                        <VideoBox 
                            title='Increment Decrement'
                            code='_rNHYqdFFsI'
                        />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-assignment-operator" 
                nextPath="/js-number-comparison"
            />
        </section>
    );
}
