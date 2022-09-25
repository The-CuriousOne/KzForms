import React from 'react'
import { useRouter } from 'next/router';

const Result = () => {
    const router = useRouter();
    const query = router.query;
    return (
        <div>
            <div className="form">
                <div className="form-header">
                    KzForms
                </div>
                <div className="form-name">
                    <div className="form-fname">
                        <label htmlFor="fname" className="form-label">
                            First Name:<label className="form-label">{query.fname}</label>
                        </label>
                    </div>
                    <div className="form-lname">
                        <label htmlFor="lname" className="form-label">
                            Last Name:<label className="form-label">{query.lname}</label>
                        </label>
                    </div>
                </div>
                <div className="gender-contactno">
                    <div className="form-gender">
                        <label htmlFor="gender" className="form-label">
                            Gender:<label className="form-label">{query.gender}</label>
                        </label>
                    </div>
                    <div className="form-contactno">
                        <label htmlFor="contactno" className="form-label">
                            Contact Number:<label className="form-label">{query.contactno}</label>
                        </label>
                    </div>
                </div>
                <div className="form-regno">
                    <label htmlFor="regno" className="form-label">
                        Registration Number:<label className="form-label">{query.regno}</label>
                    </label>
                </div>
                <div className="form-branch">
                    <label htmlFor="branch" className="form-label">
                        Branch:<label className="form-label">{query.branch}</label>
                    </label>
                </div>
                <div className="srm-mail-id">
                    <label htmlFor="srm-email" className="form-label">
                        SRMIST Email Id:<label className="form-label">{query.branch}</label>
                    </label>
                </div>
                <div className="github">
                    <label htmlFor="git" className="form-label">
                        GitHub Profile Link:<label className="form-label">{query.github}</label>
                    </label>
                </div>
                <div className="linkin-prof">
                    <label htmlFor="linkin" className="form-label">
                        Linkin Profile Link:<label className="form-label">{query.linkin}</label>
                    </label>
                </div>
            </div>
        </div>

    )
}

export default Result
