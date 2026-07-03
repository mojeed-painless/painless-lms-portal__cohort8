import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function BasicOperators() {

    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Basic Operators</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    
                        <VideoBox 
                            title='Basic Operators'
                            code=''
                        />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="" 
                nextPath=""
            />
        </section>
    );
}
