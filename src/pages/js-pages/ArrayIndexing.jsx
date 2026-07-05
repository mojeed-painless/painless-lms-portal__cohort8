import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function ArrayIndexing() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Array Indexing</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Array Indexing'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-array-declaration" 
                nextPath="/js-array-length"
            />
        </section>
    );
}