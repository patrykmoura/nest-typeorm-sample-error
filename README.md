# Setup

1) npm install

# The error

Just run nx serve api-user
The error doesn't tell much, i'm stuck cuz all I could see is that after removing the @JoinColumn() annotation at the file \libs\data\src\lib\entity\user.entity.ts, it will work, but it s needed to create the relationships... 

if you run nx serve api-user (without removing the @JoinColumn() annotation), you will see the following:

wtf-minimum\node_modules\typeorm\browser\index.js:1
import { __awaiter, __generator } from "tslib";
^^^^^^

SyntaxError: Cannot use import statement outside a module


Tks a lot

