import db from "../src/db"

import dotorSample from "../src/packages/data/dotorSample";

import { register } from "../src/packages/actions/user";

async function main() {
    // Delete exisiting doctors
    await db.user.deleteMany({
        where: { role: 'DOCTOR' }
    });
    for (const doctorData of dotorSample) {
        let { userId } = await register({ firstName: doctorData.firstName, lastName: doctorData.lastName, email: doctorData.email, password: doctorData.password, role: 'DOCTOR' });
        if (!userId) {
            throw new Error("failed to create User");
        }
        console.log("Created user for doctor with ID: ", userId);

        const createdDoctor = await db.doctor.create({
            data: {
                userId,
                imgPath: doctorData.imgPath,
                about: doctorData.about,
                totalRating: doctorData.totalRating,
                speciality: doctorData.speciality,
                specialitySummary: doctorData.specialitySummary,
                educationSummary: doctorData.educationSummary,
                experienceSummary: doctorData.experienceSummary,
                courses: {
                    create: doctorData.courses
                },
                awards: {
                    create: doctorData.awards
                },
                experiences: {
                    create: doctorData.experiences
                },
                skills: {
                    create: doctorData.skills
                }
            },
            include: {
                courses: true,
                awards: true,
                experiences: true,
                skills: true
            }
        });
        console.log(`Created doctor with ID: ${createdDoctor.userId}`);
    }
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    });
