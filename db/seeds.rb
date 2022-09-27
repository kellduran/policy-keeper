puts "🌱 Seeding..."

# puts "Making Users...."

# 4.times {User.create(user_email: Faker::Internet.free_email, user_name: Faker::Internet.username(specifier: 4..8), password: "TestTesty", is_admin: false, confirmation_token: "", email_validated: true)}

puts "Making Policies"
Policy.create!( state: "WV", law_citation: "WV ST § 16-5H-1", title: "§ 16-5H-1. Purpose and Short Title", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 16. Public Health", summary: "West's Annotated Code of West Virginia|**|Chapter 16. Public Health|**| Article 5H. Chronic Pain Clinic Licensing Act", effective_year: "06/08/2012", included: "No" )
Policy.create( state: "WV", law_citation: "WV ST § 16-5H-4", title: "§ 16-5H-4. Operational Requirements", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 16. Public Health", summary: "West's Annotated Code of West Virginia|**|Chapter 16. Public Health|**| Article 5H. Chronic Pain Clinic Licensing Act", effective_year: "06/08/2012", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 16-5H-9", title: "§ 16-5H-9. Rules", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 16. Public Health", summary: "West's Annotated Code of West Virginia|**|Chapter 16. Public Health|**| Article 5H. Chronic Pain Clinic Licensing Act", effective_year: "06/07/2018", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 16-54-3", title: "§ 16-54-3. Opioid prescription notifications", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 16. Public Health", summary: "West's Annotated Code of West Virginia|**|Chapter 16. Public Health|**| Article 54. Opioid Reduction Act", effective_year: "06/07/2019", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 16-54-4", title: "§ 16-54-4. Opioid prescription limitations", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 16. Public Health", summary: "West's Annotated Code of West Virginia|**|Chapter 16. Public Health|**| Article 54. Opioid Reduction Act", effective_year: "06/07/2019", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 16-54-5", title: "§ 16-54-5. Subsequent prescriptions; limitations", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 16. Public Health", summary: "West's Annotated Code of West Virginia|**|Chapter 16. Public Health|**| Article 54. Opioid Reduction Act", effective_year: "06/07/2019", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 16-54-6", title: "§ 16-54-6. Ongoing treatment; referral to pain clinic or pain specialist", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 16. Public Health", summary: "West's Annotated Code of West Virginia|**|Chapter 16. Public Health|**| Article 54. Opioid Reduction Act", effective_year: "06/07/2019", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 16-54-7", title: "§ 16-54-7. Exceptions", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 16. Public Health", summary: "West's Annotated Code of West Virginia|**|Chapter 16. Public Health|**| Article 54. Opioid Reduction Act", effective_year: "06/07/2019", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 16-54-8", title: "§ 16-54-8. Treatment of pain", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 16. Public Health", summary: "West's Annotated Code of West Virginia|**|Chapter 16. Public Health|**| Article 54. Opioid Reduction Act", effective_year: "06/07/2019", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 30-3A-2", title: "§ 30-3A-2. Limitation on Disciplinary Sanctions or Criminal Punishment Related to Management of Pain", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 30. Professions and Occupations", summary: "West's Annotated Code of West Virginia|**|Chapter 30. Professions and Occupations|**| Article 3A. Management of Pain Act", effective_year: "06/07/2018", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 30-3A-3", title: "§ 30-3A-3. Acts Subject to Discipline or Prosecution", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 30. Professions and Occupations", summary: "West's Annotated Code of West Virginia|**|Chapter 30. Professions and Occupations|**| Article 3A. Management of Pain Act", effective_year: "06/07/2018", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 30-3A-4", title: "§ 30-3A-4. Abnormal or Unusual Prescribing Practices", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 30. Professions and Occupations", summary: "West's Annotated Code of West Virginia|**|Chapter 30. Professions and Occupations|**| Article 3A. Management of Pain Act", effective_year: "06/07/2018", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 30-7-15a", title: "§ 30-7-15a. Prescriptive authority for prescription drugs; coordination with Board of Pharmacy; rule-making authority", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 30. Professions and Occupations", summary: "West's Annotated Code of West Virginia|**|Chapter 30. Professions and Occupations|**| Article 7. Registered Professional Nurses", effective_year: "06/10/2016", included: "Yes" )
Policy.create( state: "WV", law_citation: "WV ST § 60A-9-5a", title: "§ 60A-9-5a. Practitioner requirements to access database and conduct annual search of the database; required rulemaking", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of West Virginia", title_description: "Chapter 60A. Uniform Controlled Substances Act", summary: "West's Annotated Code of West Virginia|**|Chapter 60A. Uniform Controlled Substances Act|**| Article 9. Controlled Substances Monitoring", effective_year: "06/07/2018", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 11-6-3", title: "§ 11-6-3. Continuing Education Satisfactory to the Board.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 11. West Virginia Board of Medicine", summary: "West Virginia Code of State Rules|**|Title 11. West Virginia Board of Medicine|**|Legislative Rule (Ser. 6)|**|Series 6. Continuing Education for Physicians and Podiatric Physicians", effective_year: "07/01/2018", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 24-7-3", title: "§ 24-7-3. General Rules for Practitioners for Patients Not Suffering from a Terminal Illness.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 24. West Virginia Board of Osteopathic Medicine", summary: "West Virginia Code of State Rules|**|Title 24. West Virginia Board of Osteopathic Medicine|**|Legislative Rule (Ser. 7)|**|Series 7. Practitioner Requirements for Controlled Substances Licensure and Accessing the West Virginia Controlled Substances Monitoring Program Database", effective_year: "05/15/2013", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 24-7-6", title: "§ 24-7-6. Discipline.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 24. West Virginia Board of Osteopathic Medicine", summary: "West Virginia Code of State Rules|**|Title 24. West Virginia Board of Osteopathic Medicine|**|Legislative Rule (Ser. 7)|**|Series 7. Practitioner Requirements for Controlled Substances Licensure and Accessing the West Virginia Controlled Substances Monitoring Program Database", effective_year: "05/15/2013", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 5-10-1", title: "§ 5-10-1. General.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 5. West Virginia Board of Dentistry", summary: "West Virginia Code of State Rules|**|Title 5. West Virginia Board of Dentistry|**|Legislative Rule (Ser. 10)|**|Series 10. Practitioner Requirements for Accessing the West Virginia Controlled Substances Monitoring Program Database", effective_year: "06/01/2014", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 5-10-3", title: "§ 5-10-3. General Rules for Practitioners for Patients Not Suffering from a Terminal Illness.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 5. West Virginia Board of Dentistry", summary: "West Virginia Code of State Rules|**|Title 5. West Virginia Board of Dentistry|**|Legislative Rule (Ser. 10)|**|Series 10. Practitioner Requirements for Accessing the West Virginia Controlled Substances Monitoring Program Database", effective_year: "06/01/2014", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 5-10-5", title: "§ 5-10-5. Discipline.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 5. West Virginia Board of Dentistry", summary: "West Virginia Code of State Rules|**|Title 5. West Virginia Board of Dentistry|**|Legislative Rule (Ser. 10)|**|Series 10. Practitioner Requirements for Accessing the West Virginia Controlled Substances Monitoring Program Database", effective_year: "06/01/2014", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 5-11-3", title: "§ 5-11-3. Continuing education requirements.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 5. West Virginia Board of Dentistry", summary: "West Virginia Code of State Rules|**|Title 5. West Virginia Board of Dentistry|**|Legislative Rule (Ser. 11)|**|Series 11. Continuing Education Requirements ", effective_year: "09/01/2016", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 5-11-4", title: "§ 5-11-4. Special Volunteer License Continuing Education Requirements.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 5. West Virginia Board of Dentistry", summary: "West Virginia Code of State Rules|**|Title 5. West Virginia Board of Dentistry|**|Legislative Rule (Ser. 11)|**|Series 11. Continuing Education Requirements ", effective_year: "09/01/2016", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 19-14-1", title: "§ 19-14-1. General.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 19. West Virginia Board of Examiners for Registered Professional Nurses", summary: "West Virginia Code of State Rules|**|Title 19. West Virginia Board of Examiners for Registered Professional Nurses|**|Legislative Rule (Ser. 14)|**|Series 14. Practitioner Requirements for Accessing the West Virginia Controlled Substances Monitoring Program Database", effective_year: "07/01/2013", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 19-14-3", title: "§ 19-14-3. General Rules for Practitioners for Patients Not Suffering From a Terminal Illness.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 19. West Virginia Board of Examiners for Registered Professional Nurses", summary: "West Virginia Code of State Rules|**|Title 19. West Virginia Board of Examiners for Registered Professional Nurses|**|Legislative Rule (Ser. 14)|**|Series 14. Practitioner Requirements for Accessing the West Virginia Controlled Substances Monitoring Program Database", effective_year: "07/01/2013", included: "Yes" )
Policy.create( state: "WV", law_citation: "W. Va. Code St. R. § 19-14-5", title: "§ 19-14-5. Discipline.", policy_type: "Regulatory", database: "WestLaw", source: "West Virginia Code of State Rules ", title_description: "Title 19. West Virginia Board of Examiners for Registered Professional Nurses", summary: "West Virginia Code of State Rules|**|Title 19. West Virginia Board of Examiners for Registered Professional Nurses|**|Legislative Rule (Ser. 14)|**|Series 14. Practitioner Requirements for Accessing the West Virginia Controlled Substances Monitoring Program Database", effective_year: "07/01/2013", included: "Yes" )
Policy.create( state: "DE", law_citation: "DE ST TI 16 § 4798", title: "§ 4798. The Delaware Prescription Monitoring Program", policy_type: "Legislative", database: "WestLaw", source: "West's Delaware Code Annotated", title_description: "Title 16. Health and Safety", summary: "West's Delaware Code Annotated|**|Title 16. Health and Safety|**| Part IV. Food and Drugs|**| Chapter 47. Uniform Controlled Substances Act|**| Subchapter VII. Miscellaneous", effective_year: "06/12/2019", included: "Yes" )
Policy.create( state: "DE", law_citation: "24 Del. Admin. Code CSA 9.0", title: "CSA 9.0. Safe Prescribing of Opioid Analgesics", policy_type: "Regulatory", database: "WestLaw", source: "West’s Delaware Administrative Code ", title_description: "Title 24. Professions and Occupations", summary: "West’s Delaware Administrative Code|**|Title 24. Professions and Occupations|**|Uncodified Regulations|**|Uniform Controlled Substances Act Regulations", effective_year: "04/11/2017", included: "Yes" )
Policy.create( state: "DE", law_citation: "24 Del. Admin. Code 1700-18.0", title: "1700-18.0. Use of Controlled Substances for the Treatment of Pain: Purpose", policy_type: "Regulatory", database: "WestLaw", source: "West’s Delaware Administrative Code ", title_description: "Title 24. Regulated Professions and Occupations", summary: "West’s Delaware Administrative Code|**|Title 24. Regulated Professions and Occupations|**|Department of State|**|Division of Professional Regulation|**| Chapter 1700. Board of Medical Licensure and Discipline", effective_year: "04/11/2013", included: "Yes" )
Policy.create( state: "DE", law_citation: "19 Del. Admin. Code 1342B-6.0", title: "1342B-6.0. Therapeutic Procedures -- Non-Operative", policy_type: "Regulatory", database: "WestLaw", source: "West’s Delaware Administrative Code ", title_description: "Title 19. Labor", summary: "West’s Delaware Administrative Code|**|Title 19. Labor|**|Division 1000. Department of Labor|**|Subdivision 1300. Division of Industrial Affairs|**| Chapter 1340. Office of Workers' Compensation|**| Part 1342. Health Care Practice Guidelines|**| Part B. Chronic Pain Treatment Guidelines", effective_year: "09/11/2013", included: "Yes" )
Policy.create( state: "DE", law_citation: "19 Del. Admin. Code 1342B-8.0", title: "1342B-8.0. Maintenance Management", policy_type: "Regulatory", database: "WestLaw", source: "West’s Delaware Administrative Code ", title_description: "Title 19. Labor", summary: "West’s Delaware Administrative Code|**|Title 19. Labor|**|Division 1000. Department of Labor|**|Subdivision 1300. Division of Industrial Affairs|**| Chapter 1340. Office of Workers' Compensation|**| Part 1342. Health Care Practice Guidelines|**| Part B. Chronic Pain Treatment Guidelines", effective_year: "09/11/2013", included: "Yes" )
Policy.create( state: "DE", law_citation: "19 Del. Admin. Code 1342C-6.0", title: "1342C-6.0. Therapeutic Procedures -- Non-Operative", policy_type: "Regulatory", database: "WestLaw", source: "West’s Delaware Administrative Code ", title_description: "Title 19. Labor", summary: "West’s Delaware Administrative Code|**|Title 19. Labor|**|Division 1000. Department of Labor|**|Subdivision 1300. Division of Industrial Affairs|**| Chapter 1340. Office of Workers' Compensation|**| Part 1342. Health Care Practice Guidelines|**| Part C. Cumulative Trauma Disorder Medical Treatment Guideline", effective_year: "09/11/2013", included: "Yes" )
Policy.create( state: "MD", law_citation: "MD CRIM LAW § 5-304", title: "§ 5-304. Authorized providers", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of Maryland", title_description: "Criminal Law", summary: "West's Annotated Code of Maryland|**|Criminal Law|**| Title 5. Controlled Dangerous Substances, Prescriptions, and Other Substances|**| Subtitle 3. Registration of Manufacturers, Distributors, and Dispensers", effective_year: "01/05/2018", included: "Yes" )
Policy.create( state: "MD", law_citation: "MD HEALTH GEN § 13-3502", title: "§ 13-3502. Co-prescribing of opioid overdose reversal drugs", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of Maryland", title_description: "Health--General", summary: "West's Annotated Code of Maryland|**|Health--General|**| Title 13. Miscellaneous Health Care Programs|**| Subtitle 35. Co-Prescribing of Opioid Overdose Reversal Drugs", effective_year: "06/01/2017", included: "Yes" )
Policy.create( state: "MD", law_citation: "MD HEALTH GEN § 21-2A-04.1", title: "§ 21-2A-04.1. Registration of Prescribers and Pharmacists with Program ", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of Maryland", title_description: "Health--General", summary: "West's Annotated Code of Maryland|**|Health--General|**| Title 21. Food, Drugs, and Cosmetics|**| Subtitle 2A. Prescription Drug Monitoring Program", effective_year: "10/01/2016", included: "Yes" )
Policy.create( state: "MD", law_citation: "MD HEALTH GEN § 21-2A-04.2", title: "§ 21-2A-04.2. Prescriber to request prescription monitoring data", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of Maryland", title_description: "Health--General", summary: "West's Annotated Code of Maryland|**|Health--General|**| Title 21. Food, Drugs, and Cosmetics|**| Subtitle 2A. Prescription Drug Monitoring Program", effective_year: "06/07/2018", included: "Yes" )
Policy.create( state: "MD", law_citation: "MD HEALTH GEN § 21-2A-08", title: "§ 21-2A-08. Liability of Department Agents and Employees, Prescribers or Dispensers", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of Maryland", title_description: "Health--General", summary: "West's Annotated Code of Maryland|**|Health--General|**| Title 21. Food, Drugs, and Cosmetics|**| Subtitle 2A. Prescription Drug Monitoring Program", effective_year: "10/01/2016", included: "Yes" )
Policy.create( state: "MD", law_citation: "MD HEALTH GEN § 21-2A-09", title: "§ 21-2A-09. Fines and penalties for violations", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of Maryland", title_description: "Health--General", summary: "West's Annotated Code of Maryland|**|Health--General|**| Title 21. Food, Drugs, and Cosmetics|**| Subtitle 2A. Prescription Drug Monitoring Program", effective_year: "06/07/2018", included: "Yes" )
Policy.create( state: "MD", law_citation: "MD HEALTH OCCUP § 1-223", title: "§ 1-223. Opioid prescription limitations", policy_type: "Legislative", database: "WestLaw", source: "West's Annotated Code of Maryland", title_description: "Health Occupations", summary: "West's Annotated Code of Maryland|**|Health Occupations|**| Title 1. Definitions; General Provisions|**| Subtitle 2. General Provisions", effective_year: "10/01/2018", included: "Yes" )
Policy.create( state: "MD", law_citation: "COMAR 10.40.11.04", title: ".04. Range of Sanctions.", policy_type: "Regulatory", database: "WestLaw", source: "Code of Maryland Regulations ", title_description: "Title 10. Maryland Department of Health", summary: "Code of Maryland Regulations|**|Title 10. Maryland Department of Health|**|Subtitle 40. Board of Podiatric Medical Examiners|**|Chapter 11. Sanctioning Guidelines (Refs & Annos)", effective_year: "10/01/2018", included: "Yes" )
Policy.create( state: "MD", law_citation: "COMAR 10.32.05.06", title: ".06 Standard Related to Telehealth.", policy_type: "Regulatory", database: "WestLaw", source: "Code of Maryland Regulations ", title_description: "Title 10. Maryland Department of Health", summary: "Code of Maryland Regulations|**|Title 10. Maryland Department of Health|**|Subtitle 32. Board of Physicians(Refs & Annos)|**|Chapter 05. Telehealth (Refs & Annos)", effective_year: "08/12/2019", included: "Yes" )
Policy.create( state: "MD", law_citation: "COMAR 10.27.05.11", title: ".11 Prescribing of Substances by a Certified Nurse Midwife.", policy_type: "Regulatory", database: "WestLaw", source: "Code of Maryland Regulations ", title_description: "Title 10. Maryland Department of Health", summary: "Code of Maryland Regulations|**|Title 10. Maryland Department of Health|**|Subtitle 27. Board of Nursing (Refs & Annos)|**|Chapter 05. Practice of Nurse Midwifery (Refs & Annos)", effective_year: "07/02/2018", included: "Yes" )
Policy.create( state: "PA", law_citation: "PA ST 35 P.S. § 872.8", title: "§ 872.8. Requirements for prescribers", policy_type: "Legislative", database: "WestLaw", source: "Purdon's Pennsylvania Statutes and Consolidated Statutes", title_description: "Title 35 P.S. Health and Safety", summary: "Purdon's Pennsylvania Statutes and Consolidated Statutes|**|Title 35 P.S. Health and Safety|**| Chapter 6B. Drugs, Poisons and Dangerous Substances|**| Achieving Better Care by Monitoring All Prescriptions Program (Abc-Map) Act", effective_year: "02/20/2018", included: "Yes" )
Policy.create( state: "PA", law_citation: "PA ST 35 P.S. § 872.9a", title: "§ 872.9a. Licensing boards to require education in pain management, addiction and prescribing and dispensing practices for opioids", policy_type: "Legislative", database: "WestLaw", source: "Purdon's Pennsylvania Statutes and Consolidated Statutes", title_description: "Title 35 P.S. Health and Safety", summary: "Purdon's Pennsylvania Statutes and Consolidated Statutes|**|Title 35 P.S. Health and Safety|**| Chapter 6B. Drugs, Poisons and Dangerous Substances|**| Achieving Better Care by Monitoring All Prescriptions Program (Abc-Map) Act", effective_year: "01/03/2017", included: "Yes" )
Policy.create( state: "PA", law_citation: "PA ST 35 P.S. § 873.3", title: "§ 873.3. Prescribing practices", policy_type: "Legislative", database: "WestLaw", source: "Purdon's Pennsylvania Statutes and Consolidated Statutes", title_description: "Title 35 P.S. Health and Safety", summary: "Purdon's Pennsylvania Statutes and Consolidated Statutes|**|Title 35 P.S. Health and Safety|**| Chapter 6B. Drugs, Poisons and Dangerous Substances|**| Safe Emergency Prescribing Act", effective_year: "01/03/2017", included: "Yes" )
Policy.create( state: "PA", law_citation: "PA ST 35 P.S. § 873.5", title: "§ 873.5. Use of prescription drug monitoring program", policy_type: "Legislative", database: "WestLaw", source: "Purdon's Pennsylvania Statutes and Consolidated Statutes", title_description: "Title 35 P.S. Health and Safety", summary: "Purdon's Pennsylvania Statutes and Consolidated Statutes|**|Title 35 P.S. Health and Safety|**| Chapter 6B. Drugs, Poisons and Dangerous Substances|**| Safe Emergency Prescribing Act", effective_year: "01/03/2017", included: "Yes" )
Policy.create( state: "PA", law_citation: "PA ST 35 Pa.C.S.A. § 52A03", title: "§ 52A03. Prohibition", policy_type: "Legislative", database: "WestLaw", source: "Purdon's Pennsylvania Statutes and Consolidated Statutes", title_description: "Title 35 Pa.C.S.A. Health and Safety", summary: "Purdon's Pennsylvania Statutes and Consolidated Statutes|**|Title 35 Pa.C.S.A. Health and Safety|**| Part III. Public Safety|**| Chapter 52A. Prescribing Opioids to Minors", effective_year: "02/04/2017", included: "Yes" )
Policy.create( state: "PA", law_citation: "PA ST 35 Pa.C.S.A. § 52A04", title: "§ 52A04. Procedure", policy_type: "Legislative", database: "WestLaw", source: "Purdon's Pennsylvania Statutes and Consolidated Statutes", title_description: "Title 35 Pa.C.S.A. Health and Safety", summary: "Purdon's Pennsylvania Statutes and Consolidated Statutes|**|Title 35 Pa.C.S.A. Health and Safety|**| Part III. Public Safety|**| Chapter 52A. Prescribing Opioids to Minors", effective_year: "12/24/2018", included: "Yes" )
Policy.create( state: "PA", law_citation: "PA ST 35 Pa.C.S.A. § 52A05", title: "§ 52A05. Penalties", policy_type: "Legislative", database: "WestLaw", source: "Purdon's Pennsylvania Statutes and Consolidated Statutes", title_description: "Title 35 Pa.C.S.A. Health and Safety", summary: "Purdon's Pennsylvania Statutes and Consolidated Statutes|**|Title 35 Pa.C.S.A. Health and Safety|**| Part III. Public Safety|**| Chapter 52A. Prescribing Opioids to Minors", effective_year: "02/04/2017", included: "Yes" )
Policy.create( state: "PA", law_citation: "PA ST 35 Pa.C.S.A. § 52B02", title: "§ 52B02. Procedure", policy_type: "Legislative", database: "WestLaw", source: "Purdon's Pennsylvania Statutes and Consolidated Statutes", title_description: "Title 35 Pa.C.S.A. Health and Safety", summary: "Purdon's Pennsylvania Statutes and Consolidated Statutes|**|Title 35 Pa.C.S.A. Health and Safety|**| Part III. Public Safety|**| Chapter 52B. Opioid Treatment Agreements", effective_year: "11/27/2019", included: "Yes" )
Policy.create( state: "PA", law_citation: "49 Pa. Code § 16.92", title: "§ 16.92. Prescribing, administering and dispensing.", policy_type: "Regulatory", database: "WestLaw", source: "Pennsylvania Administrative Code", title_description: "Title 49. Professional and Vocational Standards", summary: "West's Pennsylvania Administrative Code|**|Title 49. Professional and Vocational Standards|**| Part I. Department of State|**| Subpart A. Professional and Occupational Affairs|**| Chapter 16. State Board of Medicine--General Provisions|**| Subchapter F. Minimum Standards of Practice", effective_year: "06/22/2013", included: "Yes" )
Policy.create( state: "PA", law_citation: "49 Pa. Code § 18.6a", title: "§ 18.6a. Prescribing, dispensing and administering drugs.", policy_type: "Regulatory", database: "WestLaw", source: "Pennsylvania Administrative Code", title_description: "Title 49. Professional and Vocational Standards", summary: "West's Pennsylvania Administrative Code|**|Title 49. Professional and Vocational Standards|**| Part I. Department of State|**| Subpart A. Professional and Occupational Affairs|**| Chapter 18. State Board of Medicine--Practitioners Other Than Medical Doctors|**| Subchapter A. Licensure and Regulation of Midwife Activities", effective_year: "04/04/2009", included: "Yes" )
Policy.create( state: "PA", law_citation: "49 Pa. Code § 18.158", title: "§ 18.158. Prescribing and dispensing drugs, pharmaceutical aids and devices.", policy_type: "Regulatory", database: "WestLaw", source: "Pennsylvania Administrative Code", title_description: "Title 49. Professional and Vocational Standards", summary: "West's Pennsylvania Administrative Code|**|Title 49. Professional and Vocational Standards|**| Part I. Department of State|**| Subpart A. Professional and Occupational Affairs|**| Chapter 18. State Board of Medicine--Practitioners Other Than Medical Doctors|**| Subchapter D. Physician Assistants|**| Physician Assistant Utilization", effective_year: "11/18/2006", included: "Yes" )
Policy.create( state: "PA", law_citation: "49 Pa. Code § 21.284", title: "§ 21.284. Prescribing and dispensing parameters.", policy_type: "Regulatory", database: "WestLaw", source: "Pennsylvania Administrative Code", title_description: "Title 49. Professional and Vocational Standards", summary: "West's Pennsylvania Administrative Code|**|Title 49. Professional and Vocational Standards|**| Part I. Department of State|**| Subpart A. Professional and Occupational Affairs|**| Chapter 21. State Board of Nursing|**| Subchapter C. Certified Registered Nurse Practitioners|**| Crnp Practice", effective_year: "12/12/2009", included: "Yes" )
Policy.create( state: "PA", law_citation: "49 Pa. Code § 21.284b", title: "§ 21.284b. Prescribing, administering and dispensing controlled substances.", policy_type: "Regulatory", database: "WestLaw", source: "Pennsylvania Administrative Code", title_description: "Title 49. Professional and Vocational Standards", summary: "West's Pennsylvania Administrative Code|**|Title 49. Professional and Vocational Standards|**| Part I. Department of State|**| Subpart A. Professional and Occupational Affairs|**| Chapter 21. State Board of Nursing|**| Subchapter C. Certified Registered Nurse Practitioners|**| Crnp Practice", effective_year: "12/12/2009", included: "Yes" )
Policy.create( state: "PA", law_citation: "49 Pa. Code § 25.177", title: "§ 25.177. Prescribing and dispensing drugs, pharmaceutical aids and devices.", policy_type: "Regulatory", database: "WestLaw", source: "Pennsylvania Administrative Code", title_description: "Title 49. Professional and Vocational Standards", summary: "West's Pennsylvania Administrative Code|**|Title 49. Professional and Vocational Standards|**| Part I. Department of State|**| Subpart A. Professional and Occupational Affairs|**| Chapter 25. State Board of Osteopathic Medicine|**| Subchapter C. Physician Assistant Provisions|**| Physician Assistant Utilization", effective_year: "08/08/2009", included: "Yes" )
Policy.create( state: "PA", law_citation: "49 Pa. Code § 33.207", title: "§ 33.207. Prescribing, administering and dispensing controlled substances.", policy_type: "Regulatory", database: "WestLaw", source: "Pennsylvania Administrative Code", title_description: "Title 49. Professional and Vocational Standards", summary: "West's Pennsylvania Administrative Code|**|Title 49. Professional and Vocational Standards|**| Part I. Department of State|**| Subpart A. Professional and Occupational Affairs|**| Chapter 33. State Board of Dentistry|**| Subchapter C. Minimum Standards of Conduct and Practice", effective_year: "06/24/1995", included: "Yes" )


puts "Making Favorites"

Favorite.create(user_id: 1, policy_id: 1)
Favorite.create(user_id: 1, policy_id: 2)
Favorite.create(user_id: 1, policy_id: 3)
Favorite.create(user_id: 1, policy_id: 4)
Favorite.create(user_id: 1, policy_id: 5)

Favorite.create(user_id: 2, policy_id: 11)
Favorite.create(user_id: 2, policy_id: 21)
Favorite.create(user_id: 2, policy_id: 41)
Favorite.create(user_id: 2, policy_id: 2)

Favorite.create(user_id: 3, policy_id: 36)
Favorite.create(user_id: 3, policy_id: 7)
Favorite.create(user_id: 3, policy_id: 24)
Favorite.create(user_id: 3, policy_id: 27)

Favorite.create(user_id: 4, policy_id: 17)
Favorite.create(user_id: 4, policy_id: 33)
Favorite.create(user_id: 4, policy_id: 10)
Favorite.create(user_id: 4, policy_id: 12)

Favorite.create(user_id: 5, policy_id: 6)
Favorite.create(user_id: 5, policy_id: 10)
Favorite.create(user_id: 5, policy_id: 19)
Favorite.create(user_id: 5, policy_id: 64)