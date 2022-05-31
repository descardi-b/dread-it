const userSeeds = require('./userSeed.json');
const thoughtSeeds = require('./thoughtSeed.json');
// import ThoughtSeed from "./thoughtSeed";
// import UserSeed from "./userSeed";

const db = require('../config/connection');
const { Thought, User } = require('../models');


// //mapping array of objects
// {ThoughtSeed.thoughtSeed.map((item,i) => (
//     <tr key={i}>
//         <td> {item.username}</td>
//         <td> {item.thoughts}</td>
//     </tr>
// ))}

db.once('open', async() => {
    try {
        await Thought.deleteMany({});
        await User.deleteMany({});

        await User.create(UserSeed);

        for (let i = 0; i < thoughtSeed.length; i++) {
            const { _id: thoughtAuthor } = await Thought.create(thoughtSeed[i]);
            const user = await User.findOneAndUpdate(
                { username: thoughtAuthor },
                {
                    $addToSet: {
                        thoughts: _id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all seeds loaded!');
    process.exit(0);
});

export default Seeds;