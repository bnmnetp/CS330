var ObjectSet = function ()
{
    this.items = {};
    this.item_count = 0;
};

ObjectSet.prototype.contains = function (x)
{
    return this.items.hasOwnProperty(x.toString());
};

ObjectSet.prototype.add = function (x)
{
    if (!this.contains(x))
    {
        this.items[x.toString()] = x;
        this.item_count++;
    }

    return this;
};

ObjectSet.prototype.remove = function (x)
{
    if (this.contains(x))
    {
        delete this.items[x.toString()];
        this.item_count--;
    }

    return this;
};

ObjectSet.prototype.clear = function ()
{
    this.items = {};
    this.item_count = 0;

    return this;
};

ObjectSet.prototype.isEmpty = function ()
{
    return this.item_count === 0;
};

ObjectSet.prototype.count = function ()
{
    return this.item_count;
};

ObjectSet.prototype.values = function ()
{
    var i, ret = [];

    for (i in this.items)
    {
        if (this.items.hasOwnProperty(i))
            ret.push(this.items[i]);
    }

    return ret;
};